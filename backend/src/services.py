from datetime import datetime
from decimal import Decimal
from xml.etree import ElementTree

import requests_async


async def telegram_notify(message: str):
    ...


async def check_delivery_date(delivery_date: datetime):
    if delivery_date < datetime.now():
        await telegram_notify('Срок поставки истек!')


async def get_usd_exchange_rate() -> Decimal | None:
    date = datetime.now().strftime('%d/%m/%Y')
    url = f"http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1={date}&date_req2={date}&VAL_NM_RQ=R01235"
    response = await requests_async.get(url)
    if response:
        usd_exchange_rate = (
            ElementTree.fromstring(response.text)
            .find('Record')
            .find('Value')
            .text
        )
        return Decimal(usd_exchange_rate.replace(',', '.'))


if __name__ == '__main__':
    import asyncio

    asyncio.run(get_usd_exchange_rate(1))
