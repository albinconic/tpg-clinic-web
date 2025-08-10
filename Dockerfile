# 1. Build stage
FROM node:20 AS builder
WORKDIR /app

# ✅ Accept build-time variable from Cloud Build
ARG NEXT_PUBLIC_MIXPANEL_TOKEN
ENV NEXT_PUBLIC_MIXPANEL_TOKEN=$NEXT_PUBLIC_MIXPANEL_TOKEN

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# ✅ Build with env variable available
RUN npm run build

# 2. Production stage
FROM node:20 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/*.js ./

EXPOSE 8080

CMD ["npm", "start"]
