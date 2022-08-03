from datetime import datetime, date
from decimal import Decimal

from asyncpg import Record
from pydantic import BaseModel
from pydantic.fields import Field


class Base(BaseModel):
    class Config:
        orm_mode = True

    @classmethod
    def from_record(cls, record: Record):
        return cls(**dict(zip(record.keys(), record.values())))


class OrderModel(Base):
    order_id: int
    number: int
    price_usd: Decimal
    delivery_date: date


if __name__ == '__main__':
    d = {
        '№': 50,
        # 'заказ №': 1426726,
        # 'стоимость,$': 1997,
        # 'срок поставки': '20.05.2022',
    }

    # o = OrderModel(**d)

    # O = OrderModel(order_id=50)
