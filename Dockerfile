FROM node:latest

WORKDIR /src
ADD . .

RUN npm install
RUN npm install -g bower
RN bower --allow-root install

EXPOSE 4000
CMD ["npm", "dev"]
