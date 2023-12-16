FROM node:16.20.2
 
ENV CORS_ORIGIN=http://47.102.134.16:9090
 
RUN mkdir -p /var/publish/nest
 
ADD ./ /var/publish/nest
 
WORKDIR /var/publish/nest
 
RUN npm install
RUN npm build
 
EXPOSE 9090
 
CMD ["node","./dist/main.js"]