# Use an official Node.js image with the desired version
FROM node:12

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Run the build command
CMD ["npm", "run", "build"]