FROM node:18-alpine as base

WORKDIR /server
COPY package*.json /
EXPOSE 3001

FROM base as production
RUN npm ci
COPY . /
CMD ["npm run start"]

FROM base as dev
RUN npm install
COPY . /
CMD ["npm run dev"]
