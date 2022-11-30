#####################################################
# Author       : fujun 14149812@qq.com
# CreateDate   : 2022-07-03 11:30:05
# LastEditors  : fujun 14149812@qq.com
# LastEditTime : 2022-07-03 11:34:00
# FilePath     : /MusicPlayer/src/Spider/BaseSpider/mSpider.py
# Description  : 
# 
# Copyright (c) 2022 by fujun, All Rights Reserved.
#####################################################

import random
import sys

import requests

from common.common import HttpStatusCode
from common.exception import HttpCodeException
from common.logger import logger
from common.utils import retry


class Spider(object):
    def __init__(self, referer: str = None, token: str = None, cookies: str = None, proxies: list = None):
        self.headers = {
            'Referer': referer,
            'X-token': token,
            'Cookie': cookies,
            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:65.0) Gecko/20100101 Firefox/65.0"
        }
        self.proxies = random.choice(proxies) if proxies else proxies

    @retry()
    def get(self, url: str, params: dict = None, **kwargs):
        """
        获取当前章节页面信息
        :param url: 访问的url
        :param params: 附带参数
        """
        response = requests.get(url, headers=self.headers, params=params, proxies=self.proxies, **kwargs)
        if response.status_code != HttpStatusCode.OK.value:
            logger.error(f"Get url: <{url}>, params: {params} failed, errorCode: {response.status_code}.")
            raise HttpCodeException(code=response.status_code)
        logger.info(f"Get url: <{url}> html page successful.")
        return response

    def get_book_info(self, *args, **kwargs) -> None: ...

    def get_chapter(self, *args, **kwargs) -> None: ...


if __name__ == '__main__':
    # GET
    query_ticket = "https://kyfw.12306.cn/otn/leftTicket/query"
    query_params = {
        # 出发日期
        "leftTicketDTO.train_date": "2022-11-26",
        # 出发站站点代码
        "leftTicketDTO.from_station": "CDW",
        # 目的站站点代码
        "leftTicketDTO.to_station": "RXW",
        # 乘客类型(成儿&学生, ADULT: 成人, 0X00: 学生)
        "purpose_codes": "ADULT",
    }
    query_train = "https://kyfw.12306.cn/otn/czxx/queryByTrainNo?train_no=760000C75401&from_station_telecode=ICW" \
                  "&to_station_telecode=RXW&depart_date=2022-11-26 "
    init_query = "https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs=%E9%87%8D%E5%BA%86,CQW&ts=%E7%A6%8F%E5%B7%9E,FZS&date=2022-11-24&flag=N,N,Y"
    sp = Spider(referer='https://www.12306.cn/')
    resp = sp.get(init_query)
    print(resp.cookies)
    # sys.exit(0)

    ticket = Spider(cookie=resp.cookies,
                    referer="https://kyfw.12306.cn/otn/leftTicket/init")

    result = requests.get(query_ticket, params=query_params, cookies=resp.cookies).json().get("data").get("result")
    # print(result)

    lis = []
    # for循环 就把列表里面元素一个一个提取出来
    for i in result:
        # split() 字符串分割方法 --> 返回是列表
        content_list = i.split("|")
        #  根据列表索引位置提取内容
        secretStr = content_list[0]

        num = content_list[3]  # 车次
        start_time = content_list[8]  # 出发时间
        end_time = content_list[9]  # 到达时间
        use_time = content_list[10]  # 耗时
        topGrade = content_list[25] if content_list[25] else content_list[32]  # 特等座
        first_class = content_list[31]  # 一等
        second_class = content_list[30]  # 二等
        hard_sleeper = content_list[28]  # 硬卧
        hard_seat = content_list[29]  # 硬座
        no_seat = content_list[26]  # 无座
        soft_sleeper = content_list[23]  # 软卧
        dit = {
            "车次": num,
            "出发时间": start_time,
            "到达时间": end_time,
            "耗时": use_time,
            "特等座": topGrade,
            "一等": first_class,
            "二等": second_class,
            "软卧": soft_sleeper,
            "硬卧": hard_sleeper,
            "硬座": hard_seat,
            "无座": no_seat,
        }
        lis.append(dit)
        # 更加方便直观查看 索引位置 ---> 列表可以通过索引位置取值
        for index, item in enumerate(content_list):
            # index 对应列表索引位置, num 对应列表里面元素
            print(index, item)
        break
    print(lis)
