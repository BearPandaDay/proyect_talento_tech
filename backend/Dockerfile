# Dockerfile para el backend
FROM node:18

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3977
CMD ["yarn", "dev"]
