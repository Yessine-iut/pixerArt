FROM node:16
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8080
CMD sleep 10;node mongo-init/init.js; node app.js