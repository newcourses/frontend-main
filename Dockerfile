# Common build stage
FROM node:16-alpine3.12 as common-build-stage

COPY ./ ./app

WORKDIR /app

RUN npm install
RUN npm run build

ENV NODE_ENV production

CMD ["npm", "run", "start"]