from enum import Enum


class Resources(Enum):
    PARAM_ILLEGAL = 123
    b = 'sss'

    @classmethod
    def get(cls, key, default: str = None):
        if key not in cls.__dict__ or str(key).startswith('_'):
            return default
        return cls.__dict__[key].value


if __name__ == '__main__':
    a = Resources.get('_module')


