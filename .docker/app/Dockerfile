FROM node:alpine

EXPOSE 3000

WORKDIR /var/www/app
COPY ./frontend/ /var/www/app/
RUN chown -R node /usr/local
RUN npm install
ENTRYPOINT ["npm", "start"]