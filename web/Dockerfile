FROM node:19.1
WORKDIR /athenas
COPY ./package.json ./package.json
RUN npm install -g http-server
RUN npm install --quiet
COPY . .

EXPOSE 3000
CMD ["http-server", "--cors", "-p3000", "/site"]
