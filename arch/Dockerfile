FROM node:lts

RUN mkdir -p /src \
    &&  npm i -g @nestjs/cli

WORKDIR /src

RUN npm install

EXPOSE 3000