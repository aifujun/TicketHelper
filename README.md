
### 火车票助手

#### 运行
1. 配置config/12306.yaml中的mode, 配置运行方式
```yaml
# enumeration: 
#   dev: 开发模式,
#   test： 测试模式,
#   release： 正式模式
mode: release
```

2. 
```shell
cd ~/TicketHelper/src

export PYTHONPATH=$PYTHONPATH:~/TicketHelper/src
# export PYTHONDONTWRITEBYTECODE=1

python -B __main__.py
```


#### <font color="red">_todo_</font>
1. 添加车站名和车站代码间的转换
2. 添加界面
3. 实现自动抢票功能？？？
4. 异常处理需细化
5. ...



