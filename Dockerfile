FROM node:16

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app/

EXPOSE 3000

#APP
CMD ["/bin/bash", "-c", "node api/index.js"]