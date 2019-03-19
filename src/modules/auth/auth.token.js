import jwt from 'jsonwebtoken';
import constants from 'Config/constants';

export function createToken(user = {}) {
  let u = JSON.parse(JSON.stringify(user));
  const option = {
    expiresIn: '5m',
  };

  return new Promise((resolve, reject) => {
    try {
      let token = jwt.sign(u, constants.JWT_SECRET, option);
      resolve(token);
    } catch (err) {
      reject(err);
    }
  });
}

export function checkToken(req, res, next) {
  const token = req.headers['x-access-token'] || req.query.token;
  console.log('여기?', token);

  let error;

  verifyToken(token)
    .then(rows => {
      return next();
    })
    .catch(err => {
      error = { message: err };
      return res.status(401).json(error);
    });
}

function verifyToken(token) {
  let isValidToken;
  return new Promise((resolve, reject) => {
    try {
      isValidToken = jwt.verify(token, constants.JWT_SECRET);

      if (!isValidToken) throw 'token is invalid';

      resolve(isValidToken);
    } catch (err) {
      reject('token is required');
    }
  });
}
