const AuthRoute = require('./auth');
const ClientRoute = require('./client');
const SecureRoute = require('./secure');

/**
 * created factory to get all the routes from one place and easy access
 */
class RoutesFactory {
  constructor(express) {
    this.express = express;
  }

  get(type) {
    switch (type) {
      case 'auth':
        return new AuthRoute(this.express.Router()).buildRoutes();

      case 'client':
        return new ClientRoute(this.express.Router()).buildRoutes();

      case 'secure':
        return new SecureRoute(this.express.Router()).buildRoutes();

      default: {
        console.log('Unknown route type...');
      }
    }
  }
}

module.exports = RoutesFactory;
