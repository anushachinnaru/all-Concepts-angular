FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install && npm install -g @angular/cli
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/sample /usr/share/nginx/html
