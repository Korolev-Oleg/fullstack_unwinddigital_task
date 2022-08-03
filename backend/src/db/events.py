from fastapi import FastAPI
from src.settings import AppSettings
import asyncpg

logger = AppSettings.logger


async def connect_to_db(app: FastAPI) -> None:
    logger.info("Connecting to PostgreSQL")

    app.state.pool = await asyncpg.create_pool(
        **AppSettings.DATABASE,
    )

    logger.info("Connection established")


async def close_db_connection(app: FastAPI) -> None:
    logger.info("Closing connection to database")

    await app.state.pool.close()

    logger.info("Connection closed")
