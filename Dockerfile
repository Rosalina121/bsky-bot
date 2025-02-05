FROM oven/bun:1

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Run the application
CMD ["bun", "start"]