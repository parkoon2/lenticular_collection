import postRoutes from 'Modules/post/post.routes';

export default app => {
  app.use('/api/v1/post', postRoutes);
};
