const controllers = require('../controllers');

class AuthRoutes {
  constructor(router) {
    this.router = router;
  }

  buildRoutes() {
    this.router.get('/', controllers.get('auth').index);
    this.router.post('/authorize', controllers.get('auth').authorize);
    this.router.post('/token', controllers.get('auth').token);

    return this.router;
  }
}

module.exports = AuthRoutes;
