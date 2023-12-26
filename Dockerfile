# Use an official Node.js runtime with Alpine Linux as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install --production

# Copy the entire React app source code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 3000 (or any other port your Node.js app uses)
EXPOSE 3000

# Start the Node.js server when the container starts
CMD ["npm", "start"]