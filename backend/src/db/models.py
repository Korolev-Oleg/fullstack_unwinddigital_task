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
    price_usd: Decimal = Field(default=0.0)
    delivery_date: date
