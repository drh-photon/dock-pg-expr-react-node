FROM node:16-alpine3.11
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install concurrently
WORKDIR /app/src/client
RUN npm install
RUN npm install react-scripts@3.4.1 -g
WORKDIR /app
COPY . /app
CMD ["npm", "run", "dev"]

