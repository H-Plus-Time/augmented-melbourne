FROM registry.ng.bluemix.net/ibmnode

ADD ./app /node-hello

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "/node-hello/app.js"]
