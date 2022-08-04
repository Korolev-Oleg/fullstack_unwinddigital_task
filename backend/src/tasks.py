from datetime import datetime

import gspread
import pydantic
from fastapi.routing import APIRouter
from fastapi_utils import tasks
from collections import deque

from src.settings import AppSettings
from src.db import models
from src import crud, services

router = APIRouter()

logger = AppSettings.logger


@router.on_event('startup')
@tasks.repeat_every(seconds=5)
@logger.catch()
async def get_data_from_google_sheet():
    account = gspread.service_account(AppSettings.GOOGLE_SHEET_CREEDS_FILE)
    client = account.open_by_url(AppSettings.GOOGLE_SHEET_DOCUMENT_URL)
    orders_for_update = deque()

    all_rows = client.sheet1.get_all_records()
    cleaned_rows = [row for row in all_rows if row]

    for sheet_row in cleaned_rows:
        delivery_date = datetime.strptime(
            sheet_row['срок поставки'], '%d.%m.%Y'
        )
        await services.check_delivery_date(delivery_date)
        new_order = {
            'order_id': sheet_row['№'],
            'number': sheet_row['заказ №'],
            'price_usd': sheet_row['стоимость,$'],
            'delivery_date': delivery_date,
        }
        try:
            models.OrderModel(**new_order)
        except pydantic.ValidationError:
            logger.error(f'Invalid order: {new_order}')
            continue

        orders_for_update.append(new_order)

    await crud.update_orders_queue(orders_for_update)
