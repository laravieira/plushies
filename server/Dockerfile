FROM node:19.0.0

ENV MYSQL_HOST mysql
ENV MYSQL_PORT 3306
ENV MYSQL_PASSWORD DrrW*t2Wr7rFuKYV!rHV
ENV MYSQL_USER root
ENV MYSQL_DATABASE athenas

WORKDIR /athenas
COPY ./package.json ./package.json
RUN npm install
COPY . .

RUN npm run build

EXPOSE 4000
CMD ["node", "build/index.js"]
