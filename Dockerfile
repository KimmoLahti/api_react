# Frontend build
FROM node:16-alpine as frontend

WORKDIR /app

COPY ./src ./src
COPY ./public ./public
COPY package*.json ./

RUN npm ci --only=production
RUN npm run build

# Backend build
FROM node:16-alpine as backend

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY ./server ./server
COPY --from=frontend /app/build ./public

EXPOSE 3000

CMD ["npm", "start"]
