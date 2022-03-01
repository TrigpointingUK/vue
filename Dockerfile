FROM node:16.13.0 as build-stage
ARG MODE="production"
ARG AUTH0_CLIENTID="Please set the AUTH0_CLIENTID build ARG"
ARG VERSION="0.0.0"
ARG SHA1=""
ARG BUILD_DATE=""

WORKDIR /app
RUN echo "VUE_APP_AUTH0_CLIENTID=$AUTH0_CLIENTID\nVUE_APP_VERSION=$VERSION\nVUE_APP_SHA1=$SHA1\nVUE_APP_BUILD_DATE=$BUILD_DATE\n" | tee .env.local
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npx vue-cli-service build --mode $MODE

FROM nginx:alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

