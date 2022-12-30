import time

from Spider.BaseSpider.base import Spider
from common.common import HttpStatusCode
from server.api.service.model.TrainInfo import TrainAllInfo


class TicketHelper(object):

    def __init__(self):
        self.http = Spider()
        self.cookies = self.init_query().cookies

    def init_query(self):
        init_query = "https://kyfw.12306.cn/otn/leftTicket/init"
        init_params = {
            "linktypeid": "dc",
            "fs": "达州,RXW",
            "ts": "成都,CDW",
            "date": time.strftime("%Y-%m-%d"),
            "flag": "N,N,Y"
        }
        resp = self.http.get(init_query, params=init_params)
        return resp

    def query(self, date: str, start_station: str, from_station: str, end_station: str, to_station: str,
              purpose: str = 'ADULT'):
        """
        查询车票信息

        :param date: 车票日期(格式: 2022-12-12)
        :param start_station: 车次
        :param from_station: 出发站点代码
        :param end_station:
        :param to_station: 目的站站点代码
        :param purpose: 乘客类型(成儿&学生, ADULT: 成人, 0X00: 学生)

        :return data: 返回车次列表
        :rtype: list
        """
        query_url = "https://kyfw.12306.cn/otn/leftTicket/query"
        query_params = {
            "leftTicketDTO.train_date": date,
            "leftTicketDTO.from_station": from_station,
            "leftTicketDTO.to_station": to_station,
            "purpose_codes": purpose,
        }
        data = []
        resp = self.http.get(query_url, params=query_params, cookies=self.cookies)
        httpstatus = resp.json().get('httpstatus')
        if httpstatus != HttpStatusCode.OK.value:
            return data
        result = resp.json().get("data", {}).get("result")
        for i in result:
            train_info = i.split("|")
            train_all_info = TrainAllInfo(
                secretStr=train_info[0],
                buttonTextInfo=train_info[1],
                trainNumber=train_info[2],
                stationTrainCode=train_info[3],
                startStationTeleCode=train_info[4],
                endStationTeleCode=train_info[5],
                fromStationTeleCode=train_info[6],
                toStationTeleCode=train_info[7],
                startTime=train_info[8],
                arriveTime=train_info[9],
                travelTime=train_info[10],
                canWebBuy=train_info[11],
                leftTicketInfo=train_info[12],
                startTrainDate=train_info[13],
                trainSeatFeature=train_info[14],
                locationCode=train_info[15],
                fromStationNumber=train_info[16],
                toStationNumber=train_info[17],
                isSupportCard=train_info[18],
                controlledTrainFlag=train_info[19],
                ggTicket=train_info[20] or "--",
                grandSoftSleeper=train_info[21] or "--",
                additional=train_info[22] or "--",
                softSleeper=train_info[23] or "--",
                softSeat=train_info[24] or "--",
                topGradeSeat=train_info[25] or "--",
                noSeat=train_info[26] or "--",
                ybTicket=train_info[27] or "--",
                hardSleeper=train_info[28] or "--",
                hardSeat=train_info[29] or "--",
                secondClassSeat=train_info[30] or "--",
                firstClassSeat=train_info[31] or "--",
                businessSeat=train_info[32] or "--",
                CRHSleeper=train_info[33] or "--",
                ypEx=train_info[34],
                seatTypes=train_info[35],
                exchangeTrainFlag=train_info[36],
                alternateTrainFlag=train_info[37],
                alternateSeatLimit=train_info[38],
                leftTicketInfoNew=train_info[39],
                dwFlag=train_info[46] if len(train_info) > 46 else "",
                stopCheckTime=train_info[48] if len(train_info) > 48 else "",
            )
            data.append(train_all_info)
        return data


if __name__ == '__main__':
    date = '2022-11-29'
    get_from = ''
    from_station = 'CDW'
    get_to = ''
    to_station = 'RXW'

    print(TicketHelper().query(date, get_from, from_station, get_to, to_station))
