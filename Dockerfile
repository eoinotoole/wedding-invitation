FROM php:8.0-apache AS php
RUN a2enmod rewrite
RUN  apt-get update -y && \
     apt-get upgrade -y && \
     apt-get -y autoremove && \
     apt-get clean
RUN apt-get install -y zip \
    unzip \
    vim \
    nodejs \
    npm

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
WORKDIR /var/www/html
COPY . .
RUN composer install

WORKDIR client
RUN npm i && npm run-script build
WORKDIR /var/www/html
