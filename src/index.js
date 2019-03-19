import express from 'express';
import http from 'http';
import constants from 'Config/constants';
import middleware from 'Config/middleware';
import database from 'Config/database';
import apiRoutes from 'Modules';

const app = express();
const server = http.createServer(app);

middleware(app);
apiRoutes(app);

server.listen(constants.PORT, () => {
  console.log(`Server is running on ${constants.PORT} port`);
});
