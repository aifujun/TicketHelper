#####################################################
# Author       : fujun 14149812@qq.com
# CreateDate   : 2022-07-06 20:27:29
# LastEditors  : fujun 14149812@qq.com
# LastEditTime : 2022-07-08 21:50:29
# FilePath     : /TicketHelper/tests/stationinfo.py
# Description  : 
# 
# Copyright (c) 2022 by fujun, All Rights Reserved.
#####################################################

import re
import requests
import csv


url = 'https://kyfw.12306.cn/otn/resources/js/framework/station_name.js?station_version=1.9226'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.49 QIHU 360SE',
}


class StationSpider:

    def __init__(self):
        self.station_code = r"([0-9]*@[a-z]+)\|([\u4e00-\u9fa5]+)\|([A-Z]+)\|([a-z]+)\|([a-z]+)"

    def get_station_info(self):
        resp = requests.get(url, headers=headers)
        resp.encoding = 'utf-8'
        stations = re.findall(self.station_code, resp.text)
        return stations

    @staticmethod
    def save_station_info(stInfo):
        try:
            with open('db/StationInfo.csv', 'w+', encoding='utf-8', newline='') as f:
                writer = csv.writer(f, skipinitialspace=True)
                writer.writerow(['id', 'stName', 'stCode', 'stPingyin', 'stAbb'])
                for item in stInfo:
                    writer.writerow(item)
        except Exception as ex:
            pass

    def format_station_code(self):
        stations = self.get_station_info()
        self.save_station_info(stations)
        stations_code = dict()
        for num, station, code, pinyin, abb in stations:
            stations_code[station] = code
        return stations_code


chezhan_code = ''
chezhan_names = ''

if __name__ == '__main__':
    st = StationSpider()
    s_code = st.format_station_code()
    print(s_code)


