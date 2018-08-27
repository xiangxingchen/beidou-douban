import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // api
  router.resources('user', '/api/user', controller.user);

  // pages
  router.get('/', '/', controller.routes.home);
  router.get(
    'routes',
    '/*',
    app.controller.routes.show,
  );

};
