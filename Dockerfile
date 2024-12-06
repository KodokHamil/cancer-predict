FROM node:22.11.0
WORKDIR /app
ENV PORT 9000
ENV MODEL_URL='https://storage.googleapis.com/model-storage-submissionmlgc-andryanaufal/model/model.json'
ENV HOST 0.0.0.0

COPY . .
RUN npm install
EXPOSE 9000
CMD [ "npm", "run", "start"]