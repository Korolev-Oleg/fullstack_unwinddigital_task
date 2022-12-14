import psycopg2
from loguru import logger

from src.settings import AppSettings


logger.info("Migrating database")
con = psycopg2.connect(**AppSettings.DATABASE.dict())
cur = con.cursor()

cur.execute(
    f"""
    CREATE TABLE IF NOT EXISTS orders
    (
        order_id SERIAL PRIMARY KEY,
        number INTEGER NOT NULL,
        price_usd DECIMAL NOT NULL,
        delivery_date DATE NOT NULL
    );
    """
)
con.commit()
