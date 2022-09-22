FROM php:7.4-apache

COPY 90-xdebug.ini "/usr/local/etc/php/conf.d"
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug