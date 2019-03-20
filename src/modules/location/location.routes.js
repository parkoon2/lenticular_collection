import { Router } from 'express';
import { verifyToken } from 'Config/auth';
import validator from './location.validator';
import * as locationController from './location.controller';

const routes = new Router();

routes.post('/create', /*verifyToken,*/ validator, locationController.create);

export default routes;
