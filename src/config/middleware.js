import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import express from 'express';
import path from 'path';

export default app => {
  const isDev = process.env.NODE_ENV === 'development';
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  if (isDev) {
    app.use(morgan('dev'));
  }

  app.use(express.static(path.join(__dirname, '../src/public')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
};
