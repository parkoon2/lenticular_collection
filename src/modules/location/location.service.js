import db from 'Config/database';

export function insertLocationInfo({
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
}) {
  const text = `INSERT INTO lenticular.location_info(user_info_idx,
    building_info_idx, location_code, floor_info,
    room_number, detail_address, position_code,
    direction_info, error_radius, qr_image_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
  const values = [
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
  ];

  return new Promise((resolve, reject) => {
    db.query(text, values)
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
}
