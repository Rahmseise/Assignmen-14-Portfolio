# Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy all project files
COPY . .

# Build the production version
RUN npm run build

# Production stage
FROM nginx:alpine

# Create working directory for site files
WORKDIR /misa_jan_final_site

# Copy built files from build stage to nginx
COPY --from=build /app/build /misa_jan_final_site

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5575
EXPOSE 5575

# Start nginx
CMD ["nginx", "-g", "daemon off;"]