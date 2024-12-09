FROM node:22.11.0
WORKDIR /app
ENV PORT 8080
ENV MODEL_URL='https://storage.googleapis.com/model-storage-submissionmlgc-andryanaufal/model/model.json'
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "start"]
