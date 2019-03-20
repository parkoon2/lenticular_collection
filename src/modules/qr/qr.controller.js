import * as qrService from './qr.service';
import HttpStatus from 'http-status-codes';

export async function create(req, res) {
  const { id, data } = req.body;
  try {
    let result = await qrService.createQRCode({ id, data });
    res
      .status(HttpStatus.OK)
      .json({ message: 'QR Code is created', filename: result });
  } catch (err) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ type: 'Generate module error', message: err });
  }
}

export async function getQR(req, res) {
  const { id } = req.params;
  try {
    let result = await qrService.findQRcodeAll(id);
    res.status(HttpStatus.OK).json({ message: 'success', files: result });
  } catch (err) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ type: 'Gettering module error', message: err });
  }
}
