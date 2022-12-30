import pprint
from typing import Generic, List, Optional, TypeVar

from pydantic import BaseModel, Field, validator
from pydantic.generics import GenericModel

from server.api.service.common.ErrorCode import HttpStatusCode
from server.api.service.config.resource import Resources

DataT = TypeVar('DataT')


class ResponseError(BaseModel):
    err_code: int = Field(default=HttpStatusCode.OK.value, alias="errCode", description="返回错误码")
    message: str = Field(default='', alias="message", description="返回的描述信息")
    fields: List[str] = Field(default=None, alias="fields", description="相关属性")
    suggestion: str = Field(default=None, alias="suggestion", description="相关建议")


class Response(GenericModel, Generic[DataT]):
    data: Optional[DataT]
    error: Optional[ResponseError]

    @validator('error', always=True)
    def check_consistency(cls, v, values):
        # if v is not None and values['data'] is not None:
        #     raise ValueError('must not provide both data and error')
        if v is None and values.get('data') is None:
            raise ValueError('must provide data or error')
        return v


class BaseResponse:
    def __init__(self, err_code: int = None, message: str = None, data: dict = None):
        """
        BaseResponse - a model for response.

        :param data: the data of this Error
        :param err_code: The code of this Error
        :param message: The message of this Error.
        """
        self.data = data
        self.error = {'errCode': err_code, 'message': message if message else Resources.get(err_code, default='')}

    def to_dict(self):
        """
        Returns the model properties as a dict

        :rtype: dict
        """
        result = {'data': self.data, 'error': self.error}
        return result

    def to_str(self):
        """
        Returns the string representation of the model

        :rtype: str
        """
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
