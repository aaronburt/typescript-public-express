# Build a builder docker container - this container will be disregarded once contents are extracted
FROM node:16 as Builder
WORKDIR /app
ADD src/ /app/
RUN npm install

# Build the deployment apline container
FROM alpine:latest
# Install requirements for the application to run
RUN apk add --update nodejs
WORKDIR /app
# Extract the contents of builder
COPY --from=Builder /app /app

ARG PORT
ENV PORT=$PORT

# Expose access to port 8080 for index.js
EXPOSE $PORT

# Run index.js
CMD [ "node", "index.js" ]