FROM node:latest

WORKDIR /code

COPY . /code/

RUN npm install

EXPOSE 3000

CMD "npm run dev"