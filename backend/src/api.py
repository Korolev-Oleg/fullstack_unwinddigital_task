import asyncio
from datetime import date

from asyncpg import Connection
from fastapi import Depends
from fastapi.exceptions import HTTPException
from fastapi.routing import APIRouter
from pydantic import Field

from src import services
from src.db import models
from src.db.dependencies import get_connection_from_pool
from src.queries.queries import queries
from src.settings import AppSettings

router = APIRouter()

logger = AppSettings.logger


class OrderResponse(models.OrderModel):
    price_rub: float = Field(default=0.0)


@router.get('/orders')
@logger.catch()
async def get_orders(conn: Connection = Depends(get_connection_from_pool)):
    result = await queries.get_orders(conn)
    if result:
        usd_rate = await services.get_usd_exchange_rate()
        orders_with_price = []
        for order_record in result:
            order_model = OrderResponse(**order_record)
            order_model.price_rub = round(order_model.price_usd * usd_rate, 2)
            orders_with_price.append(order_model)
        result = orders_with_price
    return {'result': result}
