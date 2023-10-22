FROM node:16 as builder
WORKDIR /jayvuedockerfiledemocode
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:latest
COPY /nginx.conf /etc/nginx
COPY --from=builder /jayvuedockerfiledemocode/dist  /usr/share/nginx/html

