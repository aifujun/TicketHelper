#####################################################
# Author       : fujun 14149812@qq.com
# CreateDate   : 2022-06-26 20:36:11
# LastEditors  : fujun 14149812@qq.com
# LastEditTime : 2022-06-29 20:52:20
# FilePath     : /TicketHelper/src/common/constants.py
# Description  : 
# 
# Copyright (c) 2022 by fujun, All Rights Reserved.
#####################################################

import os


class Constants:
    CODE_ROOT = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))

    def __setattr__(self, attr, value):
        if attr:
            raise AttributeError(f'{type(self).__name__}.{attr} is readonly')
        super(Constants, self).__setattr__(attr, value)


class Directory:
    config_file = os.path.join(Constants.BASE_DIR, 'config', 'configuration.yaml')
    station_info_file = os.path.join(Constants.BASE_DIR, 'db', 'StationInfo.csv')
    logger_file = os.path.join(Constants.BASE_DIR, 'log', 'all.log')

