import { Router } from 'express';
import { checkToken } from 'Modules/auth/auth.token';
import * as postController from './post.controller';

const routes = new Router();

routes.get('/list', /*checkToken,*/ postController.list);

export default routes;
