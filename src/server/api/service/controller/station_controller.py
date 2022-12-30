import csv
import os
import re

import connexion

from server.api.service.base.request_base import RequestBase
from server.api.service.common.ErrorCode import ErrCode, HttpStatusCode
from server.api.service.common.utils import send_response
from server.api.service.model.TrainInfo import StationData
from common.logger import logger
from client.manager.configure.config_manager import GlobalData
from client.manager.configure.t12306_manager import T12306Manager

__all__ = ["StationController", "query_station_info"]


class StationController(RequestBase):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__all_station_code_regex = r"([0-9]*@[a-z]+)\|([\u4e00-\u9fa5]+)\|([A-Z]+)\|([a-z]+)\|([a-z]+)"
        self.__station_code_regex = r"([\u4e00-\u9fa5]+)\|([A-Z]+)"
        self.__request = {
            "get": self.get,
            "post": self.post,
            "put": self.put,
            "patch": self.patch,
            "delete": self.delete
        }
        self.station_info = self.get_station_info()
        self.station_code = dict(zip(self.station_info.values(), self.station_info.keys()))
        self.t_manager = T12306Manager()

    @staticmethod
    def save_station_info(station_info, encoding: str = "utf-8"):
        try:
            with open(GlobalData.station_info_file, 'w+', encoding=encoding, newline='') as f:
                writer = csv.writer(f, skipinitialspace=True)
                writer.writerow(['id', 'StationName', 'StationCode', 'StationPinyin', 'StationAbb'])
                for item in station_info:
                    writer.writerow(item)
            return True
        except OSError as oe:
            logger.exception(f'save station failed, except: {oe}')
            return False

    @staticmethod
    def load_station_info(encoding: str = "utf-8"):
        try:
            with open(GlobalData.station_info_file, 'r', encoding=encoding) as f:
                reader = csv.reader(f)
                rows = [row for row in reader]
            return rows
        except OSError as oe:
            logger.exception(f'Load station info file failed, except: {oe}')

    @staticmethod
    def exist():
        return os.path.exists(GlobalData.station_info_file)

    def update_station_info(self, version: str = '1.9242'):
        method, url, params = self.t_manager.get_url(GlobalData.station_info, station_version=version)
        resp = self.__request.get(method)(url, params=params)
        resp.encoding = 'utf-8'
        all_station_info = re.findall(self.__all_station_code_regex, resp.text)
        station_info = re.findall(self.__station_code_regex, resp.text)
        self.station_info = dict(station_info)
        self.station_code = dict(zip(self.station_info.values(), self.station_info.keys()))
        if not self.save_station_info(all_station_info):
            logger.error("Save station info failed, pls check.")
        return dict(station_info)

    def get_station_info(self):
        station_code = dict()
        if not self.exist():
            station_code = self.update_station_info()
        else:
            for st_id, station, code, pinyin, abb in self.load_station_info():
                if station == "StationName":
                    continue
                station_code[station] = code
        return station_code

    def name_to_code(self, station_name: str):
        station_code = self.station_info.get(station_name)
        if not station_code:
            logger.error(f"Not found station: {station_name} for code, pls check.")
        return station_code

    def code_to_name(self, station_code: str):
        station_name = self.station_code.get(station_code)
        if not station_name:
            logger.error(f"Not found station: {station_code} for name, pls check.")
        return station_name


def query_station_info():
    station_controller = StationController()
    params = connexion.request.args.to_dict()
    station_name = params.get('stationName')
    station_code = params.get('stationCode')
    logger.info(f"Get station info with station_name: {station_name}, station_code: {station_code}")
    # 参数校验
    if station_name and station_code:
        return send_response(http_code=HttpStatusCode.BAD_REQUEST.value,
                             err_code=ErrCode.PARAM_ILLEGAL.value,
                             message="You have to specify either `stationName` or `stationCode` parameter.")
    if station_name and station_name not in station_controller.station_info.keys():
        logger.error(f'Param station_name: {station_name} is error.')
        return send_response(http_code=HttpStatusCode.NOT_FOUND.value, err_code=ErrCode.PARAM_ERROR.value)
    if station_code and station_code not in station_controller.station_code.keys():
        logger.error(f'Param station_code: {station_code} is error.')
        return send_response(http_code=HttpStatusCode.NOT_FOUND.value, err_code=ErrCode.PARAM_ERROR.value)

    if station_name:
        station_info = station_controller.name_to_code(station_name)
        data = StationData(stationCode=station_info)
    elif station_code:
        station_info = station_controller.code_to_name(station_code)
        data = StationData(stationName=station_info)
    else:
        data = station_controller.station_info
    return send_response(data=data)

