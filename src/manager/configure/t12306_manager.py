from common.exception import ConfigError, RequiredParamException
from common.logger import logger
from manager.configure.config_manager import GlobalData


class T12306Manager:
    def __init__(self):
        self.station_info = "stationInfo"
        self.global_data = GlobalData()

    def get_url(self, url_name: str, **kwargs):
        server = self.global_data.t12306_conf.get('servers', {}).get(url_name).get('server')
        if not server:
            logger.error(f'Not find url name: {url_name}')
            raise ValueError(f'{url_name} is not existed')
        method = server.get('method')
        url = server.get('url')
        if not method or not url:
            logger.error(f'Get method: `{method}`, url: `{url}` from api: {url_name} error, pls check.')
            raise ConfigError(f'Config in [t12306.servers.{url_name}.server] error')
        tmp_params = server.get('parameters')
        parameters = None
        if not tmp_params:
            return method, url, parameters

        parameters = dict()
        for param in tmp_params:
            if param.get('name') and param.get('name') not in kwargs.keys() and param.get('required'):
                logger.error(f'{url_name} is required param {param.get("name")}')
                raise RequiredParamException(f'{url_name} is required param {param.get("name")}')
            elif param.get('name') and param.get('name') not in kwargs.keys() and not param.get('required'):
                continue
            parameters.update({param.get('name'): kwargs.get(param.get('name'))})
        return method, url, parameters

