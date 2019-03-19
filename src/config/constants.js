const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

const devConfig = {
  MONGO_URL: 'mongodb://localhost/parkoon-dev',
};

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/parkoon-prod',
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
