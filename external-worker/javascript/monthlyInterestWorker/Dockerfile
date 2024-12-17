# Use a lightweight Node.js image
FROM node:20-alpine

# Create and set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install -s camunda-external-task-client-js
RUN npm install --production

# Copy the worker source code into the image
COPY . .

# Set the command to run the worker
CMD ["node", "index.js"]
