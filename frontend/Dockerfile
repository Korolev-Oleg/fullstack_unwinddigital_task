FROM node:16.16-alpine

RUN mkdir /app
COPY package-lock.json /app
COPY package.json /app
WORKDIR /app
RUN npm install --no
RUN npm install -g serve
