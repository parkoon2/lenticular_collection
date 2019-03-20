import fs from 'fs';
import QRCode from 'qrcode';

export const generate = (path, text = '') => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!path) {
        throw 'ERROR!! Path param is required (./a/b/c/d.png)';
      }

      if (path.indexOf('.png') === -1) path = path + '.png';

      const options = {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        rendererOpts: {
          quality: 0.3,
        },
      };

      const qrDataURL = await QRCode.toDataURL(text, options);
      const base64Data = qrDataURL.replace(/^data:image\/png;base64,/, '');

      fs.writeFileSync(path, base64Data, 'base64');
      resolve(path);
    } catch (err) {
      reject(err);
    }
  });
};
