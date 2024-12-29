# Dockerfile for React Frontend
FROM node:18-alpine

WORKDIR /frontend

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the app code and start the React dev server
COPY . .
CMD ["npm", "run", "dev"]
