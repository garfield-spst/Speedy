# 1. Use the official Node.js image as base
FROM node:18-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 4. Copy only package manager files to install deps
COPY pnpm-lock.yaml package.json ./

# 5. Install dependencies
RUN pnpm install --frozen-lockfile

# 6. Copy rest of the code
COPY . .

# 7. Build the Next.js app
RUN pnpm build

# 8. Production image
FROM node:18-alpine AS runner

WORKDIR /app

# Enable pnpm in runner (for any runtime needs)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Only copy the build output and needed files
COPY --from=deps /app/public ./public
COPY --from=deps /app/src ./src
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/next.config.ts ./next.config.ts
COPY --from=deps /app/tsconfig.json ./tsconfig.json

# Set environment variable
ENV NODE_ENV production

# Start the Next.js server
CMD ["pnpm", "start"]
