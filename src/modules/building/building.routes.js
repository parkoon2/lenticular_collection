import { Router } from 'express';
import { verifyToken } from 'Config/auth';
import validator from './building.validator';
import * as buildingController from './building.controller';

const routes = new Router();

routes.post('/create', /*verifyToken,*/ validator, buildingController.create);

export default routes;
