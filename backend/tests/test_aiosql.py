import asyncio
import asyncpg
from src.settings import AppSettings
from src.queries.queries import queries


async def test_aiosql():
    conn = await asyncpg.connect(**AppSettings.DATABASE.dict())
    order = await queries.get_orders(conn)
    print(order)


asyncio.run(test_aiosql())
