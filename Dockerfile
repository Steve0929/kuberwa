# Specify a base image
#FROM node:alpine

#WORKDIR /usr/app

# Install some depenendencies
#COPY ./package.json ./
#RUN npm install
#COPY ./ ./

#RUN source .env

# Default command
#CMD ["npm", "run", "start"]
FROM nginx:1.17
COPY build/ /usr/share/nginx/html
