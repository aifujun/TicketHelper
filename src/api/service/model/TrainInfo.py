from pydantic import BaseModel, Field


class StationData(BaseModel):
    station_name: str = Field(default=None, alias='stationName', description='车站名')
    station_code: str = Field(default=None, alias='stationCode', description="车站编号")


class TrainAllInfo(BaseModel):
    secret_str: str = Field(alias="secretStr", description="the secret string")
    # 备注按钮(预定)
    button_text_info: str = Field(alias="buttonTextInfo", description="the button with \"预定\"")
    # 列车编号
    train_number: str = Field(alias="trainNumber", description="the train No.")
    # 列车车次
    station_train_code: str = Field(alias="stationTrainCode", description="the station code")
    # 始发站
    start_station_tele_code: str = Field(alias="startStationTeleCode", description="the start station tele code")
    # 终点站
    end_station_tele_code: str = Field(alias="endStationTeleCode", description="the end station tele code")
    # 出发站
    from_station_tele_code: str = Field(alias="fromStationTeleCode", description="the from station tele code")
    # 到达站(目的站)
    to_station_tele_code: str = Field(alias="toStationTeleCode", description="the to station tele code")
    # 出发时间
    start_time: str = Field(alias="startTime", description="the start time of train")
    # 达到时间
    arrive_time: str = Field(alias="arriveTime", description="the arrive time of train")
    # 旅途耗时
    travel_time: str = Field(alias="travelTime", description="the travel time of train")
    can_web_buy: str = Field(alias="canWebBuy", description="whether can buy ticket in web")
    # 余票信息(是否能候补)
    left_ticket_info: str = Field(alias="leftTicketInfo", description="the info of left ticket")
    start_train_date: str = Field(alias="startTrainDate", description="the start train date")
    train_seat_feature: str = Field(alias="trainSeatFeature", description="the train seat feature")
    location_code: str = Field(alias="locationCode", description="the location code")
    # 发车车站站序(停靠站详细中查看)
    from_station_number: str = Field(alias="fromStationNumber", description="the from station number")
    # 终点站车站站序(停靠站详细中查看)
    to_station_number: str = Field(alias="toStationNumber", description="the to station number")
    is_support_card: str = Field(alias="isSupportCard", description="whether support card pay")
    controlled_train_flag: str = Field(alias="controlledTrainFlag", description="the controlled train flag")

    gg_ticket: str = Field(alias="ggTicket", description="the gg ticket")
    # 高级软卧
    grand_soft_sleeper: str = Field(alias="grandSoftSleeper", description="the grand soft sleeper")
    # 其他
    additional: str = Field(alias="additional", description="the additional ticket")
    # 软卧
    soft_sleeper: str = Field(alias="softSleeper", description="the soft sleeper")
    # 软座
    soft_seat: str = Field(alias="softSeat", description="the soft seat")
    # 特等座
    top_grade_seat: str = Field(alias="topGradeSeat", description="the top grade seat")
    # 无座
    no_seat: str = Field(alias="noSeat", description="the no seat")
    yb_ticket: str = Field(alias="ybTicket", description="the yb ticket")
    # 硬卧
    hard_sleeper: str = Field(alias="hardSleeper", description="the hard sleeper")
    # 硬座
    hard_seat: str = Field(alias="hardSeat", description="the hard seat")
    # 二等座(二等座包坐)
    second_class_seat: str = Field(alias="secondClassSeat", description="the second class seat")
    # 一等座
    first_class_seat: str = Field(alias="firstClassSeat", description="the first class seat")
    # 商务座
    business_seat: str = Field(alias="businessSeat", description="the business seat")
    # 动卧
    crh_sleeper: str = Field(alias="CRHSleeper", description="China Railway High-speed sleeper")

    yp_ex: str = Field(alias="ypEx", description="the yp ex")
    seat_types: str = Field(alias="seatTypes", description="the seat types")
    exchange_train_flag: str = Field(alias="exchangeTrainFlag", description="the exchange train flag")
    # 候补
    alternate_train_flag: str = Field(alias="alternateTrainFlag", description="the alternate train flag")
    alternate_seat_limit: str = Field(alias="alternateSeatLimit", description="the alternate seat limit")
    # 新余票信息
    left_ticket_info_new: str = Field(alias="leftTicketInfoNew", description="the new info of left ticket")
    dw_flag: str = Field(alias="dwFlag", description="第46个值")
    stop_check_time: str = Field(alias="stopCheckTime", description="第48个值")


class TrainInfo(BaseModel):
    # 列车编号
    train_number: str = Field(alias="trainNumber", description="the train No.")
    # 列车车次
    station_train_code: str = Field(alias="stationTrainCode", description="the station code")
    # 备注按钮(预定)
    button_text_info: str = Field(alias="buttonTextInfo", description="the button with \"预定\"")
    # 始发站
    start_station_tele_code: str = Field(alias="startStationTeleCode", description="the start station tele code")
    # 终点站
    end_station_tele_code: str = Field(alias="endStationTeleCode", description="the end station tele code")
    # 出发站
    from_station_tele_code: str = Field(alias="fromStationTeleCode", description="the from station tele code")
    # 到达站(目的站)
    to_station_tele_code: str = Field(alias="toStationTeleCode", description="the to station tele code")
    # 出发时间
    start_time: str = Field(alias="startTime", description="the start time of train")
    # 达到时间
    arrive_time: str = Field(alias="arriveTime", description="the arrive time of train")
    # 旅途耗时
    travel_time: str = Field(alias="travelTime", description="the travel time of train")

    # 高级软卧
    grand_soft_sleeper: str = Field(alias="grandSoftSleeper", description="the grand soft sleeper")
    # 其他
    additional: str = Field(alias="additional", description="the additional ticket")
    # 软卧
    soft_sleeper: str = Field(alias="softSleeper", description="the soft sleeper")
    # 软座
    soft_seat: str = Field(alias="softSeat", description="the soft seat")
    # 特等座
    top_grade_seat: str = Field(alias="topGradeSeat", description="the top grade seat")
    # 无座
    no_seat: str = Field(alias="noSeat", description="the no seat")
    # 硬卧
    hard_sleeper: str = Field(alias="hardSleeper", description="the hard sleeper")
    # 硬座
    hard_seat: str = Field(alias="hardSeat", description="the hard seat")
    # 二等座(二等座包坐)
    second_class_seat: str = Field(alias="secondClassSeat", description="the second class seat")
    # 一等座
    first_class_seat: str = Field(alias="firstClassSeat", description="the first class seat")
    # 商务座
    business_seat: str = Field(alias="businessSeat", description="the business seat")
    # 动卧
    crh_sleeper: str = Field(alias="CRHSleeper", description="China Railway High-speed sleeper")
