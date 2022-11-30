import threading
import time

from functools import wraps

from common.exception import HttpCodeException


class SingletonType(type):
    """
    创建单实例基类, 其他类创建类时继承(metaclass=SingletonType)
    元类(metaclass) 可以通过方法 __metaclass__ 创造了类(class)，而类(class)通过方法 __new__ 创造了实例(instance)
    """
    _instance_lock = threading.Lock()

    def __call__(cls, *args, **kwargs):
        if not hasattr(cls, "_instance"):
            with SingletonType._instance_lock:
                if not hasattr(cls, "_instance"):
                    cls._instance = super(SingletonType, cls).__call__(*args, **kwargs)
        return cls._instance


class Singleton(object):
    """
    单例模式装饰器, 双重检查加锁提高效率(只有在第一次执行此方法时，才需要进程锁进行同步)
    """
    _instance_lock = threading.Lock()

    def __init__(self, cls):
        self._cls = cls
        self._instance = None

    def __call__(self):
        if self._instance is None:
            with self._instance_lock:
                if self._instance is None:
                    self._instance = self._cls()
        return self._instance


def retry(retry_count: int = 5, interval: int = 3):
    """
    HttpCodeException重试装饰器
    """
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal retry_count
            while retry_count:
                try:
                    res = func(*args, **kwargs)
                    return res
                except HttpCodeException:
                    time.sleep(interval)
                    retry_count -= 1
                    continue
            raise HttpCodeException()
        return wrapper
    return decorator

