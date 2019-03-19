const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

const devConfig = {};

const prodConfig = {};

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
