import path from 'path';

const defaultConfig = {
  PORT: process.env.PORT || 9991,
  JWT_SECRET: 'knowledgepoint1024!@',
};

const devConfig = {
  MONGO_URL: 'mongodb://localhost/parkoon-dev',
  PG: {
    user: 'kpoint',
    host: '106.240.247.42',
    database: 'lenticulardb',
    password: 'kpoint01',
    port: 5432,
  },
  QR: {
    HOST: 'http://localhost',
    PORT: 7778,
    PATH: '/qr',
  },
};

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/parkoon-prod',
  PG: {
    user: 'kpoint',
    host: '106.240.247.42',
    database: 'lenticulardb',
    password: 'kpoint01',
    port: 5432,
  },
  QR: {
    HOST: 'http://106.240.247.42',
    PORT: 9991,
    PATH: '/qr',
  },
};

function envHandler(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'prod':
      return prodConfig;
    default:
      return devConfig;
  }
}

export default {
  ...defaultConfig,
  ...envHandler(process.env.NODE_ENV),
};
