FROM node:18.0.0-alpine3.15

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm ci --only=production

CMD [ "node", "src/index.js" ]
