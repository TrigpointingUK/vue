FROM node:16.13.0 as build-stage
ARG MODE="production"
ARG AUTH0_CLIENTID="Please set the AUTH0_CLIENTID build ARG"

WORKDIR /app
RUN echo "VUE_APP_AUTH0_CLIENTID=$AUTH0_CLIENTID" | tee .env.local
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npx vue-cli-service build --mode $MODE

FROM nginx:alpine as production-stage
ARG VERSION="0.0.0"
ARG SHA1=""
ARG BUILD_DATE=""
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
ENV VUE_APP_VERSION=$VERSION
ENV VUE_APP_SHA1=$SHA1
ENV VUE_APP_BUILD_DATE=$BUILD_DATE
