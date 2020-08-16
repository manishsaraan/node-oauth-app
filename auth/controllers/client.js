const path = require('path'); // has path and __dirname

class ClientController {
  index(_, res) {
    return res.sendFile(
      path.join(__dirname, '../public/clientAuthenticate.html')
    );
  }

  dashboard(_, res) {
    res.sendFile(path.join(__dirname, '../public/secure.html'));
  }

  app(_, res) {
    res.sendFile(path.join(__dirname, '../public/clientApp.html'));
  }
}

module.exports = ClientController;
