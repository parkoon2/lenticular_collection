const defaultConfig = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: 'knowledgepoint1024!@',
};

const devConfig = {
  MONGO_URL: 'mongodb://localhost/parkoon-dev',
  DB: {
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
  },
};

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/parkoon-prod',
  DB: {
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
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
