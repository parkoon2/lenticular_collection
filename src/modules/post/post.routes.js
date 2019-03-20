import { Router } from 'express';
import { verifyToken } from 'Config/auth';
import * as postController from './post.controller';

const routes = new Router();

routes.get('/list', verifyToken, postController.list);

export default routes;
