import asyncio
from collections import deque
from datetime import datetime

from src.db.models import OrderModel
from src.db.utils import get_db_connection
from src.queries.queries import queries
from src.settings import AppSettings

logger = AppSettings.logger


@logger.catch()
async def update_orders_queue(orders: deque[{}]):
    connection = await get_db_connection()
    async with connection.transaction():
        for new_order in orders:
            order_from_db = await queries.get_order_by_id(
                connection, new_order.get('order_id')
            )
            if order_from_db:
                await queries.update_order(connection, **new_order)
            else:
                await queries.create_order(connection, **new_order)
