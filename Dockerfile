FROM nginx:1.13-alpine

COPY .vuepress/dist/ /usr/share/nginx/html

EXPOSE 80
