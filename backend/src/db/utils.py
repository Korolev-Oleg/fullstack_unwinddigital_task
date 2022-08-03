import asyncpg

from src.settings import AppSettings


async def get_db_connection() -> asyncpg.Connection:
    return await asyncpg.connect(**AppSettings.DATABASE)
