
class HttpCodeException(Exception):

    def __init__(self, code: int = None, msg: str = None, msg_detail: str = None, *args, **kwargs):
        self.code = code
        self.err_msg = msg
        self.err_msg_detail = msg_detail


class ConfigError(Exception):

    def __init__(self, msg: str = None, msg_detail: str = None, *args, **kwargs):
        self.err_msg = msg
        self.err_msg_detail = msg_detail


class RequiredParamException(Exception):

    def __init__(self, msg: str = None, msg_detail: str = None, *args, **kwargs):
        self.err_msg = msg
        self.err_msg_detail = msg_detail

