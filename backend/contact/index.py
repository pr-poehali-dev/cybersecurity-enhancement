import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Приём заявки с сайта ЧОП Тигр и отправка на email."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    service = body.get("service", "Не указана")
    message = body.get("message", "").strip()

    if not name or not phone:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "name and phone required"})}

    smtp_email = os.environ.get("SMTP_EMAIL", "")
    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    to_email = os.environ.get("SMTP_EMAIL", "")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта: {name}"
    msg["From"] = smtp_email
    msg["To"] = to_email

    html = f"""
    <h2>Новая заявка с сайта ООО ЧОП «Тигр»</h2>
    <table style="border-collapse:collapse; width:100%; max-width:600px">
      <tr><td style="padding:8px; font-weight:bold; color:#555">Имя:</td><td style="padding:8px">{name}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px; font-weight:bold; color:#555">Телефон:</td><td style="padding:8px"><a href="tel:{phone}">{phone}</a></td></tr>
      <tr><td style="padding:8px; font-weight:bold; color:#555">Услуга:</td><td style="padding:8px">{service}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px; font-weight:bold; color:#555">Комментарий:</td><td style="padding:8px">{message or '—'}</td></tr>
    </table>
    """
    msg.attach(MIMEText(html, "html"))

    smtp_host = "smtp.yandex.ru"
    smtp_port = 465
    if "gmail" in smtp_email.lower():
        smtp_host = "smtp.gmail.com"
        smtp_port = 587

    if smtp_port == 465:
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_email, smtp_password)
            server.sendmail(smtp_email, to_email, msg.as_string())
    else:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_email, smtp_password)
            server.sendmail(smtp_email, to_email, msg.as_string())

    return {"statusCode": 200, "headers": headers, "body": json.dumps({"ok": True})}
