from fastapi import FastAPI
from src.settings import AppSettings
from src.db import events as db_events


logger = AppSettings.logger


def create_start_app_handler(
    app: FastAPI,
) -> callable:  # type: ignore
    async def start_app() -> None:
        await db_events.connect_to_db(app)

    return start_app


def create_stop_app_handler(app: FastAPI) -> callable:  # type: ignore
    @logger.catch
    async def stop_app() -> None:
        await db_events.close_db_connection(app)

    return stop_app
