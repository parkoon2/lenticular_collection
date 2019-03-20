import { Router } from 'express';
import * as qrController from './qr.controller';

const routes = new Router();

routes.post('/create', qrController.create);
routes.get('/:id', qrController.getQR);

export default routes;
