FROM nginx:1.17.6-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY /include.websocket /etc/nginx/taxi-app/include.websocket
COPY /include.forwarded /etc/nginx/taxi-app/include.forwarded
COPY /dev.conf /etc/nginx/conf.d