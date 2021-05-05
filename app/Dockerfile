FROM node:14
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
EXPOSE 3000
CMD ["node","server"]