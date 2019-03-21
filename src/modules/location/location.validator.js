import HttpStatus from 'http-status-codes';

export default async function validator(req, res, next) {
  const {
    USER_INFO_IDX,
    BUILDING_INFO_IDX,
    LOCATION_CODE,
    FLOOR_INFO,
    ROOM_NUMBER,
    DETAIL_ADDRESS,
    POSITION_CODE,
    DIRECTION_INFO,
    ERROR_RADIUS,
    QR_IMAGE_URL,
  } = req.body;

  if (!USER_INFO_IDX)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'USER_INFO_IDX(number) is required' });

  if (!BUILDING_INFO_IDX)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'BUILDING_INFO_IDX(string) is required' });

  if (!LOCATION_CODE)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'LOCATION_CODE(string) is required' });

  if (!FLOOR_INFO)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'FLOOR_INFO(string) is required' });

  if (!ROOM_NUMBER)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'ROOM_NUMBER(string) is required' });

  if (!DETAIL_ADDRESS)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'DETAIL_ADDRESS(string) is required' });

  if (!POSITION_CODE)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'POSITION_CODE(string) is required' });

  if (!DIRECTION_INFO)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'DIRECTION_INFO(string) is required' });

  if (!ERROR_RADIUS)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'ERROR_RADIUS(string) is required' });

  if (!QR_IMAGE_URL)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'QR_IMAGE_URL(string) is required' });

  next();
}
