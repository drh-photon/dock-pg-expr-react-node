FROM node:16-alpine3.11
RUN apt update --fix-missing && apt install -y -q \ 
  curl \
  git \
  wget \
  postgresql \
  nginx

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

