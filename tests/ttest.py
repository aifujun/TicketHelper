#####################################################
# Author       : fujun 14149812@qq.com
# CreateDate   : 2022-07-06 20:24:22
# LastEditors  : error: git config user.name && git config user.email & please set dead value or install git
# LastEditTime : 2022-07-10 10:30:01
# FilePath     : /TicketHelper/tests/ttest.py
# Description  : 
# 
# Copyright (c) 2022 by fujun, All Rights Reserved.
#####################################################

import json
import requests

from colorama import init, Fore
from prettytable import PrettyTable

from stationinfo import chezhan_code, chezhan_names


class Colored(object):

    def __init__(self):
        init(autoreset=False)

    @staticmethod
    def yeah(s):
        return Fore.LIGHTCYAN_EX + s + Fore.RESET

    @staticmethod
    def green(s):
        return Fore.LIGHTGREEN_EX + s + Fore.RESET

    @staticmethod
    def yellow(s):
        return Fore.LIGHTYELLOW_EX + s + Fore.RESET

    @staticmethod
    def white(s):
        return Fore.LIGHTWHITE_EX + s + Fore.RESET

    @staticmethod
    def blue(s):
        return Fore.LIGHTBLUE_EX + s + Fore.RESET


def show_ticket(data):
    # data = json.loads(data)
    table_title = ["车次", "出发车站", "到达车站", "出发时间", "到达时间", " 历时 ", "商务座", " 一等座", "二等座",
                   "高级软卧", "软卧", "动卧", "硬卧", "软座", "硬座", "无座", "其他", "备注"]
    table = PrettyTable(table_title)
    for i in data['data']['result']:
        name = [
            "station_train_code",
            "from_station_name",
            "to_station_name",
            "start_time",
            "arrive_time",
            "lishi",
            "swz_num",
            "zy_num",
            "ze_num",
            "dw_num",
            "gr_num",
            "rw_num",
            "yw_num",
            "rz_num",
            "yz_num",
            "wz_num",
            "qt_num",
            "note_num"
        ]

        data = {
            "station_train_code": '',
            "from_station_name": '',
            "to_station_name": '',
            "start_time": '',
            "arrive_time": '',
            "lishi": '',
            "swz_num": '',
            "zy_num": '',
            "ze_num": '',
            "dw_num": '',
            "gr_num": '',
            "rw_num": '',
            "yw_num": '',
            "rz_num": '',
            "yz_num": '',
            "wz_num": '',
            "qt_num": '',
            "note_num": ''
        }

        # 将各项信息提取并赋值
        item = i.split('|')  # 使用“|”进行分割
        data["station_train_code"] = item[3]  # 获取车次信息，在3号位置
        data["from_station_name"] = item[6]  # 始发站信息在6号位置
        data["to_station_name"] = item[7]  # 终点站信息在7号位置
        data["start_time"] = item[8]  # 出发时间在8号位置
        data["arrive_time"] = item[9]  # 抵达时间在9号位置
        data["lishi"] = item[10]  # 经历时间在10号位置
        data["swz_num"] = item[32] or item[25]  # 特别注意，商务座在32或25位置
        data["zy_num"] = item[31]  # 一等座信息在31号位置
        data["ze_num"] = item[30]  # 二等座信息在30号位置
        data["gr_num"] = item[21]  # 高级软卧信息在21号位置
        data["rw_num"] = item[23]  # 软卧信息在23号位置
        data["dw_num"] = item[27]  # 动卧信息在27号位置
        data["yw_num"] = item[28]  # 硬卧信息在28号位置
        data["rz_num"] = item[24]  # 软座信息在24号位置
        data["yz_num"] = item[29]  # 硬座信息在29号位置
        data["wz_num"] = item[26]  # 无座信息在26号位置
        data["qt_num"] = item[22]  # 其他信息在22号位置
        data["note_num"] = item[1]  # 备注信息在1号位置

        color = Colored()
        data["note_num"] = color.white(item[1])
        # 如果没有信息，那么就用“-”代替
        for pos in name:
            if data[pos] == "":
                data[pos] = "-"

        tickets = []
        cont = []
        cont.append(data)
        for x in cont:
            tmp = []
            for y in name:
                if y == "from_station_name":
                    s = color.green(chezhan_names[data["from_station_name"]])
                    tmp.append(s)
                elif y == "to_station_name":
                    s = color.yeah(chezhan_names[data["to_station_name"]])
                    tmp.append(s)
                elif y == "start_time":
                    s = color.green(data["start_time"])
                    tmp.append(s)
                elif y == "arrive_time":
                    s = color.yeah(data["arrive_time"])
                    tmp.append(s)
                elif y == "station_train_code":
                    s = color.yellow(data["station_train_code"])
                    tmp.append(s)
                else:
                    tmp.append(data[y])
            tickets.append(tmp)
        for ticket in tickets:
            table.add_row(ticket)
    print(table)


def main():
    date = input("请输入时间(yy-mm-dd): \n")
    from_station = chezhan_code[input("请输入起始站点: \n")]
    to_station = chezhan_code[input("请输入目的站点: \n")]
    url = "https://kyfw.12306.cn/otn/leftTicket/query?"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.5702.400 QQBrowser/10.2.1893.400",
        "Cookie": "_uab_collina=165710646376921914484909; tk=eN1IUR-WwRUd1E8fQmPLXyP4lx-0_SWxSMAU1Acgf1f0; JSESSIONID=F208DF4CE67032C8626848A305EFFCB5; BIGipServerotn=2597781770.24610.0000; BIGipServerpassport=887619850.50215.0000; guidesStatus=off; highContrastMode=defaltMode; cursorStatus=off; RAIL_EXPIRATION=1657373602559; RAIL_DEVICEID=CZAYsNyZ1QvODiI41paTcGWbCt1lZKuWjlX39Q_KdxmJVGSxnOz6ZYLZZPl88bUiCbGy5Hy3m_AcbLCXm9KMskgdEDD_N0ZcX38zfOf-RCbxhdN-Onl-N_NJ4cgm0ERYly2Cbvug_V0cq-0Uy-UpCc7B0A08IuCq; route=9036359bb8a8a461c164a04f8f50b252; _jc_save_fromStation=%u798F%u5DDE%2CFZS; _jc_save_fromDate=2022-07-08; _jc_save_toDate=2022-07-06; _jc_save_wfdc_flag=dc; _jc_save_toStation=%u8FBE%u5DDE%2CRXW",
        "Referer": "https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs=%E7%A6%8F%E5%B7%9E,FZS&ts=%E8%BE%BE%E5%B7%9E,RXW&date=2022-07-08&flag=N,N,Y"
    }
    url = url + "leftTicketDTO.train_date=" + date + "&leftTicketDTO.from_station=" + from_station + "&leftTicketDTO.to_station=" + to_station + "&purpose_codes=ADULT"
    print(url)  # 已经检查过生成的URL是正确的
    # request请求获取主页
    r = requests.get(url, headers=headers)
    print(r.text)
    r.raise_for_status()  # 如果发送了一个错误的请求，会抛出异常
    r.encoding = r.apparent_encoding
    show_ticket(r.text)


def get_info():
    try:
        data = input("请输入车票日期")
    except Exception:
        pass


if __name__ == '__main__':
    main()
