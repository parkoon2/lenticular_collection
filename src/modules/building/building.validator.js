import HttpStatus from 'http-status-codes';

export default async function validator(req, res, next) {
  const {
    USER_INFO_IDX,
    BUILDING_CODE,
    LATITUDE,
    LONGITUDE,
    ADDRESS_JIBUN,
    ADDRESS_ROAD,
    BUILDING_NAME,
    BUILDING_DONG,
  } = req.body;

  if (!USER_INFO_IDX || typeof USER_INFO_IDX !== 'string')
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'USER_INFO_IDX(number) is required' });

  if (!BUILDING_CODE || typeof USER_INFO_IDX !== 'string')
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'BUILDING_CODE(string) is required' });

  if (!LONGITUDE || typeof USER_INFO_IDX !== 'string')
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'LONGITUDE(string) is required' });

  if (!LATITUDE || typeof USER_INFO_IDX !== 'string')
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'LATITUDE(string) is required' });

  if (!ADDRESS_JIBUN || typeof USER_INFO_IDX !== 'string')
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'ADDRESS_JIBUN(string) is required' });

  if (!ADDRESS_ROAD || typeof USER_INFO_IDX !== 'string')
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'ADDRESS_ROAD(string) is required' });

  if (!BUILDING_NAME || typeof USER_INFO_IDX !== 'string')
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'BUILDING_NAME(string) is required' });

  if (!BUILDING_DONG || typeof USER_INFO_IDX !== 'string')
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: 'BUILDING_DONG(string) is required' });

  next();
}
