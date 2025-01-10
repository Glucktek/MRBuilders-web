# Use the official Node.js image as a base
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Astro application
RUN npm run build

# Use a minimal image to serve the built app
FROM nginx:alpine AS runner

# Copy built files to NGINX's HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port Astro will run on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

