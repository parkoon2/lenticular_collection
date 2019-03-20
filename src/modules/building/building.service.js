import db from 'Config/database';

export function insertBuildingInfo({
  USER_INFO_IDX,
  BUILDING_CODE,
  LATITUDE,
  LONGITUDE,
  ADDRESS_JIBUN,
  ADDRESS_ROAD,
  BUILDING_NAME,
  BUILDING_DONG,
}) {
  const text = `INSERT INTO lenticular.building_info(user_info_idx,
    building_code, latitude, longitude, address_jibun, address_road,
    building_name, building_dong) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
  const values = [
    USER_INFO_IDX,
    BUILDING_CODE,
    LATITUDE,
    LONGITUDE,
    ADDRESS_JIBUN,
    ADDRESS_ROAD,
    BUILDING_NAME,
    BUILDING_DONG,
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
