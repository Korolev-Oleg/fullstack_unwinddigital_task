from asyncpg import Record, Connection

class TestModel:
    async def get_all_tests(self, conn: Connection) -> list[Record]: ...

class Orders:
    async def get_orders(self, conn: Connection) -> list[Record]: ...
    async def get_order_by_id(
        self, conn: Connection, order_id: int
    ) -> Record: ...

    async def create_order(
        self, conn: Connection,
        number: int,
        price_usd: float,
        delivery_date: str,

    ) -> Record: ...
    async def update_order(
        self,
        conn: Connection,
        order_id: int,
        number: int,
        price_usd: float,
        delivery_date: str,
    ) -> Record: ...

class Queries(Orders): ...

queries = Queries()
