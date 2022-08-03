#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
  npm run build
  npm run -s build
else
  npm start
fi
