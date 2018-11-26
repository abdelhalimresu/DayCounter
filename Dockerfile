FROM node:8

RUN mkdir /app
WORKDIR  /app
ADD . /app/

RUN npm install

CMD npm start
