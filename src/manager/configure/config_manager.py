import configparser

import yaml

from common.constants import Directory
from common.exception import ConfigError
from common.utils import SingletonType


class PrettyDict(dict):
    __setattr__ = dict.__setitem__
    __getattr__ = dict.__getitem__


class ConfigManager:
    def __init__(self):
        self._config_file = Directory.config_file
        self.__config = self.load_configuration()

    @property
    def config(self):
        return self.__config

    @staticmethod
    def load_config(file, case_sensitivity: bool = True):
        """
        加载ini配置文件

        :param file: ini格式配置文件
        :param case_sensitivity: 大小写敏感, 默认为True
        :return:
        """
        conf = configparser.ConfigParser()
        if case_sensitivity:
            conf.optionxform = lambda option: option
        conf.read(file, encoding='utf-8')
        return conf

    @classmethod
    def trans_dict(cls, dikt: dict) -> dict | PrettyDict:
        """
        将字典转换成对象

        :param dikt: 待转换的字典
        :return: 转换后的对象obj, 既能使用字典取值方式, 又能使用对象取值方式
        """
        if not isinstance(dikt, dict):
            return dikt
        d = PrettyDict()
        for k, v in dikt.items():
            d[k] = cls.trans_dict(v)
        return d

    def load_configuration(self):
        """读取yaml配置文件"""
        try:
            with open(self._config_file, 'r', encoding='utf-8') as f:
                parse_yaml = yaml.safe_load(f)
            return parse_yaml
        except OSError as ioe:
            raise ConfigError(f'Read file {self._config_file} failed.') from ioe
        except yaml.YAMLError as ye:
            raise ConfigError(f'Load yaml {self._config_file} failed.') from ye


class GlobalData(metaclass=SingletonType):
    station_info_file = Directory.station_info_file
    station_info = "stationInfo"

    logger_file = Directory.logger_file

    def __init__(self, readonly: bool = True):
        self._readonly = readonly
        self.version = self._get_conf("appVersion")
        self.conf_info = self._get_conf("info")
        self.app_conf = self._get_conf("app")
        self.t12306_conf = self._get_conf("t12306")
        self.mode = self.app_conf.mode if self.app_conf.mode else 'release'

    @staticmethod
    def _get_conf(info_name: str):
        config_manager = ConfigManager()
        config = config_manager.config
        return config_manager.trans_dict(config.get(info_name, {}))
