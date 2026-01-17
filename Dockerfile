# Stage 1: Build
FROM node:24.13.0-alpine AS builder
WORKDIR /app

# Copy package.json and lockfile
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Build Next.js
RUN npm run build

# Stage 2: Production
FROM node:24.13.0-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
# Copy build output and package.json
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "run", "start"]

# Stage 3: Development
FROM node:24-bullseye-slim AS development
WORKDIR /app
ENV NODE_ENV=development

RUN apt-get update && apt-get install -y build-essential python3 && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install
RUN npm rebuild lightningcss
# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start Next.js in dev mode
CMD ["npx", "next", "dev"]
