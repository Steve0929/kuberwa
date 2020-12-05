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

FROM nginx:alpine
COPY build/ /usr/share/nginx/html
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
#RUN rm -rf ./*
# Copy static assets from builder stage
#COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
