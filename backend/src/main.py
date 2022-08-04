from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src import events, tasks, api
from src.settings import AppSettings


def get_application():
    application = FastAPI()
    application.include_router(api.router, tags=['api'], prefix='/api/v1')
    application.include_router(tasks.router, tags=['tasks'])

    application.add_middleware(
        CORSMiddleware,
        allow_origins=AppSettings.ALLOW_ORIGINS,
    )

    application.add_event_handler(
        "startup",
        events.create_start_app_handler(application),
    )

    application.add_event_handler(
        "shutdown",
        events.create_stop_app_handler(application),
    )

    return application


app = get_application()
