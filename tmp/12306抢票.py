# Author: aifujun
# Project: 12306抢票
# File: /easy.py
# Date: 2022/1/15 12:59
# Note:
import logging
import time

import openpyxl

from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException, ElementNotVisibleException, TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.ui import Select

from lib.spider import Spider


class TrainSpider(Spider):
    # 定义类属性
    login_url = 'https://kyfw.12306.cn/otn/resources/login.html'  # 登录网址
    profil_url = 'https://kyfw.12306.cn/otn/view/index.html'  # 个人中心网址
    left_ticket = 'https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc'  # 余票查询页面
    confirm_url = 'https://kyfw.12306.cn/otn/confirmPassenger/initDc'  # 确认乘车人订单

    # 定义初始化方法
    def __init__(self, from_station, to_station, train_date, trains, passengers):
        super().__init__(r'.\conf\config.ini', log='train')
        self.driver = webdriver.Chrome(executable_path=r".\bin\chromedriver.exe")
        self.from_station = from_station
        self.to_station = to_station
        self.train_date = train_date
        self.station_code = self.init_station_code()
        self.trains = trains
        self.passengers = passengers
        self.train_no = None
        self.train_seat = None

    def login(self, user, pwd):
        """
        登录12306

        Args:
            user: 用户账号
            pwd: 用户密码
        Returns:
        """
        try:
            self.driver.get(self.login_url)
            user_form = self.driver.find_element(by=By.XPATH, value='//*[@id="J-userName"]')
            pwd_form = self.driver.find_element(By.XPATH, '//*[@id="J-password"]')
            login = self.driver.find_element(By.ID, 'J-login')
            if user_form and pwd_form and login:
                user_form.send_keys(user)
                self.driver.execute_script(f'arguments[0].value="{pwd}"', pwd_form)
                login.click()
            # 等待1800s或者页面跳转至个人中心页面
            WebDriverWait(self.driver, 600).until(
                ec.url_to_be(self.profil_url),
                message='登录失败，请尝试重新登录'
            )
            self.log.info('登陆成功')
            return True
        except TimeoutException as t:
            self.driver.quit()
            self.log.error(t)
            return False

    def query_ticket(self):
        """
        打开查询余票网址

        Returns:
        """
        self.driver.get(self.left_ticket)
        from_station_input = self.driver.find_element(by=By.ID, value='fromStation')
        to_station_input = self.driver.find_element(by=By.ID, value='toStation')
        train_date_input = self.driver.find_element(by=By.ID, value='train_date')

        from_station_code = self.station_code[self.from_station]
        to_station_code = self.station_code[self.to_station]
        # 使用js代码传入
        self.driver.execute_script(f'arguments[0].value="{from_station_code}"', from_station_input)
        self.driver.execute_script(f'arguments[0].value="{to_station_code}"', to_station_input)
        self.driver.execute_script(f'arguments[0].value="{self.train_date}"', train_date_input)

        search_tag = self.driver.find_element(By.ID, 'query_ticket')
        search_tag.click()
        try:
            while self.driver.find_element(by=By.ID, value='qd_closeDefaultWarningWindowDialog_id'):
                self.driver.find_element(by=By.ID, value='qd_closeDefaultWarningWindowDialog_id').click()
                # time.sleep(0.1)
                self.driver.find_element(By.ID, 'query_ticket').click()
        except NoSuchElementException:
            self.log.info('正在查询车票...')

        try:
            # 解析车次，等待车次列表加载
            WebDriverWait(self.driver, 30).until(
                ec.presence_of_element_located((By.XPATH, '//tbody[@id="queryLeftTable"]/tr')),
                message='查询车次时间过长，尝试刷新'
            )
            self.log.info('已查询到车次信息')
            return True
        except TimeoutException as t:
            self.log.error(t)
            return False

    def check_ticket(self):
        seat_type_config = dict(self.config.items('SeatType'))
        has_ticket = False  # 标记是否有余票
        while self.query_ticket():
            # 筛选出有车次的tr，去掉属性为datatran的tr
            trains = self.driver.find_elements(By.XPATH, '//tbody[@id="queryLeftTable"]/tr[not(@datatran)]')
            # 遍历每个车次
            for train in trains:
                train_no = train.find_element(By.XPATH, './/td[1]//a').text
                info = [i.text for i in train.find_elements(By.XPATH, './/td[@id]')]
                if train_no in self.trains:
                    for seat_type in self.trains[train_no]:
                        if info[int(seat_type_config[seat_type])].isdigit() or \
                           info[int(seat_type_config[seat_type])] == '有':
                            has_ticket = True
                            break
                    if has_ticket:
                        self.train_no = train_no
                        reserve_btn = train.find_element(By.XPATH, './/a[@class="btn72"]')
                        reserve_btn.click()
                        return has_ticket

    def reserve(self):
        success = False
        while self.check_ticket():
            try:
                WebDriverWait(self.driver, 30).until(
                    ec.url_to_be(self.confirm_url)
                )
                break
            except TimeoutException:
                self.log.error('预定页面加载失败，正在尝试重新订票')
                continue

        while True:
            try:
                # 等待乘车人加载完成
                WebDriverWait(self.driver, 30).until(
                    ec.presence_of_element_located((By.XPATH, '//ul[@id="normal_passenger_id"]/li/label'))
                )
                break
            except TimeoutException:
                self.log.error('加载乘车人失败，尝试重新加载')
                self.driver.refresh()

        # 获取所有的乘车人
        psgers_list = self.driver.find_elements(By.XPATH, '//ul[@id="normal_passenger_id"]/li/label')
        # 选择乘车人
        for psger in psgers_list:
            name = psger.text
            if name in self.passengers:
                psger.click()
        # 选择席位
        seat_select = Select(self.driver.find_element(By.ID, 'seatType_1'))
        seat_types = self.trains[self.train_no]
        for seat_type in seat_types:
            try:
                seat_select.select_by_value(seat_type)
                self.train_seat = seat_type
            except NoSuchElementException:
                continue
            else:
                break
        WebDriverWait(self.driver, 1000).until(
            ec.element_to_be_clickable((By.ID, 'submitOrder_id'))
        )
        # 提交订单
        submit_btn = self.driver.find_element(By.ID, 'submitOrder_id')
        submit_btn.click()
        # 等待窗口出现
        WebDriverWait(self.driver, 30).until(
            ec.presence_of_element_located((By.CLASS_NAME, 'dhtmlx_window_active'))
        )
        # 等待按钮可以点击
        WebDriverWait(self.driver, 30).until(
            ec.element_to_be_clickable((By.ID, 'qr_submit_id'))
        )
        confirm_btn = self.driver.find_element(By.ID, 'qr_submit_id')
        while confirm_btn:
            try:
                confirm_btn.click()
                confirm_btn = self.driver.find_element(By.ID, 'qr_submit_id')
            except ElementNotVisibleException:
                success = True
                break
        print(f'恭喜{self.train_no}的{self.train_seat}抢票成功...')
        return success

    @staticmethod
    def init_station_code():
        wb = openpyxl.load_workbook('.\\station_info.xlsx')
        ws = wb.active
        d = {}
        for row in ws.rows:
            temp_lst = []
            for cell in row:
                temp_lst.append(cell.value)
            d[temp_lst[1]] = temp_lst[2]
        return d

    def main(self):
        """主函数，调用所有其他函数"""
        if self.login('f14149812', 'fujun52085'):
            while not self.reserve():
                self.reserve()


def start():
    from_station = '成都' or input('请输入出发地')
    to_station = '达州' or input('请输入目的地')
    trip_date = '2022-01-30' or input('请输入出发时间(如:2021-06-21)')
    trains = {'C952': ['O', 'M']}
    passengers = ['符长鋆']
    spider = TrainSpider(from_station, to_station, trip_date, trains, passengers)
    spider.main()


if __name__ == '__main__':
    start()
