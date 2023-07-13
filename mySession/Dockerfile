FROM node:16-stretch

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]