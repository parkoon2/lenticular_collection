import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

server.listen(3000, () => {
  console.log(`Server is running on ${3000} port`);
});
