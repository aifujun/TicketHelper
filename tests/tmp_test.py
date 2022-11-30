import json
import os

import six
import yaml
from pydantic import BaseModel

from common.logger import logger


dikt = {'q': 1, 'w': 2, 'e': 3, 'r': 4, 'a': {1, 2, 3}, 's': {'z': 1, 'x': 2}, 'd': [1, 2, 3]}


def load_config():
    file = r"E:\CodeHub\TicketHelper\config\12306.yaml"
    with open(file, 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)
    return data


if __name__ == '__main__':
    # json.dumps()
    home = os.environ.get('USERPROFILE')
    print(load_config())

