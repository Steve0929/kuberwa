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
#FROM nginx:1.17
#COPY build/ /usr/share/nginx/html


#FROM nginx:alpine
#COPY build/ /usr/share/nginx/html
#WORKDIR /usr/share/nginx/html
#ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM node:alpine as builder 
WORKDIR '/builddir'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#FROM nginx:alpine
#COPY --from=builder /builddir/build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf /etc/nginx/conf.d
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
