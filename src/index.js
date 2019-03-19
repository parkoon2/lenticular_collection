import express from 'express';
import http from 'http';
import constants from 'Config/constants';

const app = express();
const server = http.createServer(app);

server.listen(constants.PORT, () => {
  console.log(`Server is running on ${constants.PORT} port`);
});
