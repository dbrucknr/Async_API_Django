# base image
FROM node:14.1.0-alpine

# set working directory
WORKDIR /taxi-app/

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH ./taxi-app/node_modules/.bin:$PATH

# install app dependencies
COPY public /taxi-app/public
COPY src /taxi-app/src
COPY ./package.json /taxi-app/package.json
COPY ./yarn.lock /taxi-app/yarn.lock
RUN yarn install

# copy the client directory into the container
COPY . ./taxi-app/