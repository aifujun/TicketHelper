
import logging
import re

from common.utils import SingletonType

__all__ = ["Logger", "logger"]

from client.manager.configure.config_manager import GlobalData


class PrettyLogger(logging.Logger):
    def exception(self,
                  msg,
                  exc_info: bool = True,
                  stack_info: bool = True,
                  stacklevel: int = 2,  # show origin lno
                  *args,
                  **kwargs) -> None:
        """
        Convenience method for logging an ERROR with exception information.
        """
        self.error(msg, exc_info=exc_info, stack_info=stack_info, stacklevel=stacklevel, *args, **kwargs)


logging.setLoggerClass(PrettyLogger)


class StringFormatter(logging.Formatter):
    def formatMessage(self, record):
        # 过滤message中的\r\n\b
        message = super(StringFormatter, self).formatMessage(record)
        message = re.sub('[\r\n\b]', ' ', message)
        return message


class Logger(metaclass=SingletonType):
    logger = logging.getLogger('test.subTest')

    def __init__(self) -> None:
        # 如果这个属性为True，记录到这个记录器的事件除了会发送到此记录器的所有处理程序外，
        # 还会传递给更高级别（祖先）记录器的处理器，此外任何关联到这个记录器的处理器。
        # 消息会直接传递给祖先记录器的处理器 —— 不考虑祖先记录器的级别和过滤器。
        # 如果为False，记录消息将不会传递给当前记录器的祖先记录器的处理器。
        # 默认值为True
        self.logger.propagate = True
        self.logger.isEnabledFor(logging.INFO)
        self.logger.setLevel(logging.INFO)

        standard_formatter = "[%(asctime)s][%(levelname)s][%(name)s][%(process)d][%(threadName)s][%(thread)d]" \
                             "[%(filename)s][%(funcName)s][%(lineno)s]%(message)s"
        self.formatter_str = StringFormatter(standard_formatter)

        stream_handler = logging.StreamHandler()
        stream_handler.setFormatter(self.formatter_str)
        self.logger.addHandler(stream_handler)

        file_handler = logging.FileHandler(GlobalData.logger_file, encoding='utf-8')
        file_handler.setFormatter(self.formatter_str)
        self.logger.addHandler(file_handler)

    @classmethod
    def set_level(cls, level):
        cls.logger.setLevel(level)


logger = Logger().logger
