
# Docker Essentials

Um acervo com diversos conteúdos relacionados a [Docker](https://docs.docker.com/) para faciliar o aprendizado e relembrar conceitos.


## Links úteis

 - [Instalação Docker](https://docs.docker.com/get-docker/)
 - [Instalação Docker Compose](https://docs.docker.com/compose/install/)
 - [Instalação Docker Compose Linux](https://docs.docker.com/compose/install/compose-plugin/#installing-compose-on-linux-systems)
## Vídeos recomendados

 - [Instalando Docker Ubuntu](https://www.youtube.com/watch?v=q4ZK6IJCS6Q&ab_channel=ROVEEb)
 - [WSL2 e Docker no Windows 10 (Instalação)](https://www.youtube.com/watch?v=05YN8F8ajBc&ab_channel=Ot%C3%A1vioMiranda)
 - [Ambiente de desenvolvimento NodeJS com Docker e Docker Compose](https://www.youtube.com/watch?v=AVNADGzXrrQ&ab_channel=Rocketseat)
## Leituras recomendadas

 - [Dev.to - Docker: Explained to a 5 year old](https://dev.to/dhravya/docker-explained-to-a-5-year-old-2cbg)
 - [Dev Genius - Get started with Docker and Docker Compose](https://blog.devgenius.io/get-started-with-docker-and-docker-compose-cddcb5a3f3b9)
 - [Dev.to - Dockerizando um projeto Node.js](https://dev.to/dotmendes/ambiente-de-desenvolvimento-node-js-com-docker-3dco)


## Dockerfile

Modelo de Dockerfile para um app Node

```
FROM node:latest

WORKDIR /code

COPY . /code/

RUN npm install

EXPOSE 3000

CMD "npm run dev"
```



## docker-compose.yml

Modelo de docker-compose.yml para um app Node

```
version: "3.9"

services:
  app:
    build: .
    command: npm run dev
    ports:
      - 3000:3000
    environment:
      - PG_PASSWORD=password
      - PG_DB=db_name
      - PG_USER=postgres
      - PG_HOST=db
      - SECRET=segredoApi
      - NODE_ENV=local
    volumes:
      - .:/code,

  db:
    image: postgres:14
    environment:
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=db_name
    ports:
      - 5432:5432
```



## Possíveis problemas

#### Problema de Instalação

Solução...

#### Problema de Porta

Solução...


## Autor

- [@Pedro Costa](https://github.com/phmc99)