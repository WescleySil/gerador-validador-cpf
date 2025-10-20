# Build stage
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage - serve static files
FROM node:16-alpine AS runtime
WORKDIR /app
RUN npm install -g http-server@14.1.1
COPY --from=build /app/public ./public
EXPOSE 5000
CMD ["http-server", "public", "-p", "5000", "-d", "false"]
