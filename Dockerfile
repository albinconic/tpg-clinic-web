# 1. Build stage
FROM node:20 AS builder
WORKDIR /app

# Install only prod dependencies first (for caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build Next.js app
RUN npm run build

# 2. Production stage
FROM node:20 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy only the necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/*.js ./

EXPOSE 8080

CMD ["npm", "start"]
