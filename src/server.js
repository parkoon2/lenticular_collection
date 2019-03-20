import express from 'express';
import http from 'http';
import constants from 'Config/constants';
import middleware from 'Config/middleware';
import apiRoutes from 'Modules';
import path from 'path';
// import { generate } from './utils/qrcode';

const app = express();
const server = http.createServer(app);

middleware(app);
apiRoutes(app);

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '../src/public/views/index.html'))
// );

server.listen(constants.PORT, () => {
  console.log(`Server is running on ${constants.PORT} port`);
});
