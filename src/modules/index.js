import buildingRoutes from 'Modules/building/building.routes';
import locationRoutes from 'Modules/location/location.routes';
import qrRoutes from 'Modules/qr/qr.routes';

export default app => {
  app.use('/api/v1/building', buildingRoutes);
  app.use('/api/v1/location', locationRoutes);
  app.use('/api/v1/qr', qrRoutes);
};
