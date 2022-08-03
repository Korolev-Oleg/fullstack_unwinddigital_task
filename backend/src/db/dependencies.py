from typing import AsyncGenerator

from asyncpg import Pool, Connection
from fastapi import Depends
from starlette.requests import Request


def _get_db_pool(request: Request) -> Pool:
    return request.app.state.pool


async def get_connection_from_pool(
    pool: Pool = Depends(_get_db_pool),
) -> AsyncGenerator[Connection, None]:
    async with pool.acquire() as conn:
        yield conn
