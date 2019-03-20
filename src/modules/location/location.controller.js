import * as locationService from './location.service';
import HttpStatus from 'http-status-codes';

export async function create(req, res) {
  try {
    await locationService.insertLocationInfo(req.body);
    res.status(HttpStatus.OK).json({ message: 'success' });
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ type: 'DB Error', message: err });
  }
}
