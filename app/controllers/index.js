const AuthController = require('./auth');
const ClientController = require('./client');
const SecureController = require('./secure');
const debug = require('../utilities/debug');

/**
 * created factory to get all the controller from one place and easy access
 */
class ContollerFactory {
  constructor(debug) {
    this.debug = debug;
  }

  get(type) {
    switch (type) {
      case 'auth':
        return new AuthController(debug);

      case 'client':
        return new ClientController(debug);

      case 'secure':
        return new SecureController(debug);

      default: {
        console.log('Unknown controller type...');
      }
    }
  }
}

module.exports = new ContollerFactory(debug);
