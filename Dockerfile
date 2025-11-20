# Use official Node LTS image (Linux — no Windows bugs)
FROM node:20.16.0

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose Next.js default port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "dev"]
