import connexion
from gevent import pywsgi

from server.api.service.controller.station_controller import StationController
from common.logger import logger
from client.manager.configure.config_manager import GlobalData


def run(host: str = '127.0.0.1', port: int = 12080):
    """
    TicketHelper微服务

    :param host: 运行host
    :param port: 开放端口
    :return: None
    """
    options = {'swagger_ui': False}
    test_app = connexion.App(__name__, options=options)
    logger.info(f'Start to run app with mode: {GlobalData().mode}')
    if GlobalData().mode == 'release':
        test_app.add_api('server/api/swagger/swagger.yaml')
        server = pywsgi.WSGIServer((host, port), test_app)
        server.serve_forever()
    else:
        test_app.add_api('server/api/swagger/swagger.yaml', resolver_error=501)
        test_app.run(host=host, port=port, debug=True)


def get_trip_info():
    trip_info = {
        'trip_date': input("请输入出发日期(eg: 2022-12-12): \n"),
        'trip_from_station': input("请输入出发站点(eg: 达州): \n"),
        'trip_to_station': input("请输入目的站点:(eg: 成都): \n")
    }
    return trip_info


def main():

    trip_info = get_trip_info()
    st = StationController().station_info


if __name__ == '__main__':
    run()
    # main()
