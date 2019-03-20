import constants from 'Config/constants';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { generate } from './qr.generator';
import { today } from 'Utilities/date';
import db from 'Config/database';

export function createQRCode(option = {}) {
  return new Promise(async (resolve, reject) => {
    const { id = '', data = '' } = option;

    const dir = path.join(__dirname, '../src/public', constants.QR.PATH, id);

    if (!fs.existsSync(dir)) mkdirp.sync(dir);

    try {
      let filename = id + '_' + String(Date.now());
      let qrPath = path.join(dir, filename);
      let result = await generate(qrPath, data);

      resolve(filename);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

export async function findQRcodeAll(id) {
  const text = `SELECT qr_image_url FROM lenticular.location_info WHERE user_info_idx = $1;`;
  const values = [id];
  console.log('여기', db);
  return new Promise((resolve, reject) => {
    db.query(text, values)
      .then(result => {
        if (result.rows.length === 0)
          return resolve('There are not qr code you created');

        let qr = result.rows.map(
          row =>
            `${constants.QR.HOST}:${constants.QR.PORT}${constants.QR.PATH}/${
              row.qr_image_url
            }`
        );
        resolve(qr);
      })
      .catch(err => {
        reject(err);
      });
  });
}
