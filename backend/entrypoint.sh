#!/bin/sh

if [ "$BACKEND_DEBUG" = "True" ]; then
  poetry install  --no-interaction --no-ansi
fi

python create_database.py
uvicorn src.main:app --reload --port 8000 --host 0.0.0.0
