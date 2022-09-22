FROM php:7.4-apache

RUN apt update && apt install nano
# RUN pecl install xdebug
RUN docker-php-ext-enable xdebug
RUN export XDEBUG_MODE=debug