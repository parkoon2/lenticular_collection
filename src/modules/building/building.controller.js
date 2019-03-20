import * as buildingService from './building.service';
import HttpStatus from 'http-status-codes';

export async function create(req, res) {
  try {
    await buildingService.insertBuildingInfo(req.body);
    res.status(HttpStatus.OK).json({ message: 'success' });
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ type: 'DB Error', message: err });
  }
}
