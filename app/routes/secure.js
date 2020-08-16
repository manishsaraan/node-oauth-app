const controllers = require('../controllers');

class SecureRoutes {
  constructor(router) {
    this.router = router;
  }

  buildRoutes() {
    this.router.get('/', controllers.get('secure').index);

    return this.router;
  }
}

module.exports = SecureRoutes;
