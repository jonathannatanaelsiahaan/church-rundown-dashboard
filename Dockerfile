FROM node:8

ENV YARN_VERSION 1.16.0

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN yarn install

RUN yarn dev

EXPOSE 8000

CMD ["node", "app.js"]
