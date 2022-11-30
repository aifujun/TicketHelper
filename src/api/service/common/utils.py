from pydantic import ValidationError

from api.service.common.ErrorCode import HttpStatusCode, ErrCode
from api.service.config.resource import Resources
from api.service.model.response import Response, ResponseError, BaseResponse
from common.logger import logger


def send_response(data: any = None,
                  http_code: int = HttpStatusCode.OK.value,
                  err_code: int = ErrCode.SUCCESS.value,
                  message: str = None,
                  *args,
                  **kwargs):
    """
    返回错误StationResponse

    :param data: 返回的数据
    :param http_code: 待返回的http code, 默认为
    :param err_code: 待返回的错误码
    :param message: 待返回的详细描述信息
    :param kwargs: enum[fields, suggestion]
    :return: API接口返回值
    """
    message = message if message else Resources.get(err_code, default='')
    try:
        error = ResponseError(errCode=err_code, message=message, **kwargs)
        resp = Response(data=data, error=error).dict(exclude_unset=True, by_alias=True)
    except ValidationError as e:
        logger.exception(f'Get response error, except_exception: {e}')
        resp = BaseResponse(err_code=ErrCode.RESPONSE_ERROR.value, message="Internal Error").to_dict()
        http_code = HttpStatusCode.INTERNAL_SERVER_ERROR.value
    return resp, http_code
