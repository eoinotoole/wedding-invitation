FROM php:8.0-apache
RUN a2enmod rewrite
RUN  apt-get update -y && \
     apt-get upgrade -y && \
     apt-get -y autoremove && \
     apt-get clean
RUN apt-get install -y zip \
    unzip \
    vim
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer