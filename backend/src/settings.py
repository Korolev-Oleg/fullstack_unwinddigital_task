import os
import sys

from pydantic import BaseConfig, BaseModel, BaseSettings
import loguru
from pathlib import Path

loguru.logger.add('logs/app.log', rotation='100 MB', enqueue=True)


class DBConf(BaseSettings):
    host = os.getenv('DATABASE_HOST', 'localhost')
    database = os.getenv('DATABASE_NAME', 'postgres')
    user = os.getenv('POSTGRES_USER', 'postgres')
    password = os.getenv('POSTGRES_PASSWORD', 'password')


class AppSettings(BaseConfig):
    """
    AppSettings
    """

    ALLOW_ORIGINS = ['http://localhost:8000', 'http://localhost:3000']

    DEBUG: bool = os.environ.get('BACKEND_DEBUG', False)

    GOOGLE_SHEET_CREEDS_FILE = (
        Path(__file__).parent.parent / 'google_sheet_creeds.json'
    )
    GOOGLE_SHEET_DOCUMENT_URL = 'https://docs.google.com/spreadsheets/d/1N8Ln2IRyhNbjXEr9l0bcxE9yxtjDLwOlqsQWD2vYtgA/edit#gid=0'

    DATABASE = DBConf()

    SECRET_KEY: str = os.environ.get(
        "BACKEND_SECRET_KEY", "SECRET_KEY_!@#$%^&*()_+"
    )
    logger = loguru.logger


assert (
    AppSettings.GOOGLE_SHEET_CREEDS_FILE.exists() is True
), f'Google Sheet creds file not found at path {AppSettings.GOOGLE_SHEET_CREEDS_FILE}'

