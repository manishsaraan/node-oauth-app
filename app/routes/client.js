const controllers = require('../controllers');

class ClientRoutes {
  constructor(router) {
    this.router = router;
  }

  buildRoutes() {
    this.router.get('/', controllers.get('client').index);
    this.router.get('/dashboard', controllers.get('client').dashboard);
    this.router.get('/app', controllers.get('client').app);

    return this.router;
  }
}

module.exports = ClientRoutes;
