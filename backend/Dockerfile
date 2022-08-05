FROM python:3.10-alpine
ENV PYTHONUNBUFFERED 1
ENV POETRY_VIRTUALENVS_CREATE=false
ENV PATH="${PATH}:/root/.poetry/bin"

# Установка пакетов python и зависимостей необходимых для их сборки
RUN apk update && apk upgrade
RUN apk add --update alpine-sdk
RUN apk add --no-cache --virtual build-deps \
    curl `# для установки poetry` \
    make gcc g++ libc-dev python3-dev libffi-dev `# для сборки пакетов` \
    postgresql-dev musl-dev libpq-dev `# для psycopg2`

# Зависимости необходимые для работы
RUN apk add --no-cache \
    git `# для установки зависимостей из git` \
    libpq `# для psycopg2`


RUN mkdir /app
WORKDIR /app
COPY pyproject.toml /app
COPY poetry.lock /app

RUN pip3 install --upgrade pip
RUN pip3 install poetry
RUN pip3 install poetry
RUN poetry config virtualenvs.create false
RUN poetry install --no-interaction --no-ansi

# Удаление зависимостей для сборки
RUN apk del --no-cache build-deps

COPY /entrypoint.sh /app/
RUN chmod +x /app/entrypoint.sh
CMD ["/bin/sh", "./entrypoint.sh"]
