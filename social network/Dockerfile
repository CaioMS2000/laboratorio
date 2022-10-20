FROM python:3.9-buster

# install nginx
RUN apt-get update && apt-get install nginx nano vim -y --no-install-recommends
COPY backend/nginx.default /etc/nginx/sites-available/default
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

# copy source and install dependencies
RUN mkdir -p /opt/app
RUN mkdir -p /opt/app/pip_cache
RUN mkdir -p /opt/app/backend
COPY backend/requirements.txt /opt/app/
COPY backend/start-server.sh /opt/app/
COPY backend/.pip_cache /opt/app/pip_cache/
# COPY backend /opt/app/backend/
COPY . /opt/app/
WORKDIR /opt/app/backend/
RUN pip install -r requirements.txt --cache-dir /opt/app/pip_cache
RUN chown -R www-data:www-data /opt/app

# start server
EXPOSE 8000
STOPSIGNAL SIGTERM
CMD ["/opt/app/backend/start-server.sh"]