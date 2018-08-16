module.exports = (app) => {
  const { dashboard, user } = app.controller;

  app.router.resources('dashboard', '/api/dashboard', dashboard);
  app.router.resources('user', '/api/user', user);

  app.get('home', '/', app.controller.routes.show);

  app.get('about', '/about', 'home.about');

  app.router.get(
    'routes',
    '/*',
    app.controller.routes.show
  );
};
