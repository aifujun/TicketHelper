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

import requests

from server.api.service.common.ErrorCode import HttpStatusCode
from common.exception import HttpCodeException
from common.logger import logger
from common.utils import retry


class RequestBase(object):
    def __init__(self, referer: str = None, token: str = None, cookies: str = None, proxies: list = None):
        self.headers = {
            'Referer': referer,
            'X-token': token,
            'Cookie': cookies,
            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:65.0) Gecko/20100101 Firefox/65.0"
        }
        self.proxies = random.choice(proxies) if proxies else proxies

    @retry()
    def get(self, url: str, **kwargs):
        """
        GET：从服务器取出资源

        :param url: 访问的url
        :param kwargs:
            params: Any = ...,
            data: Any | None = ...,
            headers: Any | None = ...,
            cookies: Any | None = ...,
            files: Any | None = ...,
            auth: Any | None = ...,
            timeout: Any | None = ...,
            allow_redirects: bool = ...,
            proxies: Any | None = ...,
            hooks: Any | None = ...,
            stream: Any | None = ...,
            verify: Any | None = ...,
            cert: Any | None = ...,
            json: Any | None = ...
        """
        response = requests.get(url, headers=self.headers, proxies=self.proxies, **kwargs)
        if response.status_code != HttpStatusCode.OK.value:
            logger.error(f"Get url: <{url}>, params: {kwargs.get('params')} failed, errorCode: {response.status_code}.")
            raise HttpCodeException(code=response.status_code)
        logger.info(f"Get url: <{url}> html page successful.")
        return response

    @retry()
    def post(self, url: str, **kwargs):
        """
        POST：在服务器新建一个资源

        :param url: 访问的url
        :param kwargs:
            params: Any = ...,
            data: Any | None = ...,
            headers: Any | None = ...,
            cookies: Any | None = ...,
            files: Any | None = ...,
            auth: Any | None = ...,
            timeout: Any | None = ...,
            allow_redirects: bool = ...,
            proxies: Any | None = ...,
            hooks: Any | None = ...,
            stream: Any | None = ...,
            verify: Any | None = ...,
            cert: Any | None = ...,
            json: Any | None = ...
        """
        response = requests.post(url, headers=self.headers, proxies=self.proxies, **kwargs)
        pass

    @retry()
    def put(self, url: str, **kwargs):
        """
        PUT：在服务器更新资源（客户端提供改变后的完整资源

        :param url: 访问的url
        :param kwargs:
            params: Any = ...,
            data: Any | None = ...,
            headers: Any | None = ...,
            cookies: Any | None = ...,
            files: Any | None = ...,
            auth: Any | None = ...,
            timeout: Any | None = ...,
            allow_redirects: bool = ...,
            proxies: Any | None = ...,
            hooks: Any | None = ...,
            stream: Any | None = ...,
            verify: Any | None = ...,
            cert: Any | None = ...,
            json: Any | None = ...
        """
        response = requests.put(url, headers=self.headers, proxies=self.proxies, **kwargs)
        pass

    @retry()
    def patch(self, url: str, **kwargs):
        """
        PATCH：在服务器更新资源（客户端只提供改变了属性）

        :param url: 访问的url
        :param kwargs:
            params: Any = ...,
            data: Any | None = ...,
            headers: Any | None = ...,
            cookies: Any | None = ...,
            files: Any | None = ...,
            auth: Any | None = ...,
            timeout: Any | None = ...,
            allow_redirects: bool = ...,
            proxies: Any | None = ...,
            hooks: Any | None = ...,
            stream: Any | None = ...,
            verify: Any | None = ...,
            cert: Any | None = ...,
            json: Any | None = ...
        """
        response = requests.patch(url, headers=self.headers, proxies=self.proxies, **kwargs)
        pass

    @retry()
    def delete(self, url: str, **kwargs):
        """
        DELETE：从服务器删除资源

        :param url: 访问的url
        :param kwargs:
            params: Any = ...,
            data: Any | None = ...,
            headers: Any | None = ...,
            cookies: Any | None = ...,
            files: Any | None = ...,
            auth: Any | None = ...,
            timeout: Any | None = ...,
            allow_redirects: bool = ...,
            proxies: Any | None = ...,
            hooks: Any | None = ...,
            stream: Any | None = ...,
            verify: Any | None = ...,
            cert: Any | None = ...,
            json: Any | None = ...
        """
        response = requests.delete(url, headers=self.headers, proxies=self.proxies, **kwargs)
        pass

    def get_info(self, *args, **kwargs) -> None: ...
