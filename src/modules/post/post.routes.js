import { Router } from 'express';
import * as postController from './post.controller';

const routes = new Router();

routes.get('/list', postController.list);

export default routes;
