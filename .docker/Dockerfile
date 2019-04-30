FROM php:7.2-apache

MAINTAINER Mauro Balestra

COPY ./backend/ /var/www/app
COPY .docker/config/apache-config.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www/app

RUN docker-php-ext-install mbstring pdo pdo_mysql \
    && chown -R www-data:www-data /var/www/app