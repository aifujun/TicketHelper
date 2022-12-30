import smtplib
import socket

from email.header import Header
from email.mime.text import MIMEText


def send_email(msg: str):
    """
    发送邮件
    :param msg: email content
    :return:
    """
    try:
        sender = "14149812@qq.com"
        receiver = "842837245@qq.com"
        subject = '恭喜，您已订票成功'
        username = "14149812@qq.com"
        password = "Ff@14149812@"
        host = "smtp.qq.com"

        msg = MIMEText(f'{msg}', 'plain', 'utf-8')  # 中文需参数‘utf-8’，单字节字符不需要
        msg['Subject'] = Header(subject, 'utf-8')
        msg['From'] = sender
        msg['To'] = receiver

        try:
            smtp = smtplib.SMTP_SSL(host)
            smtp.connect(host)
        except socket.error:
            smtp = smtplib.SMTP()
            smtp.connect(host)
        smtp.connect(host)
        smtp.login(username, password)
        smtp.sendmail(sender, receiver.split(","), msg.as_string())
        smtp.quit()
        print(u"邮件已通知, 请查收")
    except Exception as e:
        print(u"邮件配置有误{}".format(e))


if __name__ == '__main__':
    send_email('1')
