import memberRoutes from 'Modules/member/member.routes';

export default app => {
  app.use('/api/v1/member', memberRoutes);
};
