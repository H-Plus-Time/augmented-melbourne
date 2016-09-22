FROM node:latest

WORKDIR /src
ADD . .

RUN npm install
RUN npm install -g bower
RUN bower --allow-root install

EXPOSE 3000
CMD ["npm", "run", "dev"]
