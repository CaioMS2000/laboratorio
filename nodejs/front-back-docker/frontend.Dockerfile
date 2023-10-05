FROM node:20-alpine

WORKDIR /app

COPY ./frontend .
# COPY ./backend/package*.json ./

# RUN rm -r node_modules
# RUN npm install && \
#     npm install net

# EXPOSE 4000
#CMD ["npm", "run", "dev"]
# CMD ["wait.sh"]