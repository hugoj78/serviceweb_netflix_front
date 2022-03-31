# pull official base image
FROM node:17-alpine3.14

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent

# Set env variable
ARG REACT_APP_SERVICEWEB_NETFLIX_COMPTE
ENV REACT_APP_SERVICEWEB_NETFLIX_COMPTE=$REACT_APP_SERVICEWEB_NETFLIX_COMPTE

# add app
COPY . ./

# start app
CMD ["npm", "start"]