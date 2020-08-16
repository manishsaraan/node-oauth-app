const path = require('path');
const oauthServer = require('../oauth/server.js');
const validateField = require('../utilities/validate');
const filePath = path.join(__dirname, '../public/oauthAuthenticate.html');

class AuthController {
  constructor(debug) {
    this.debug = debug;

    /** manully binding this. It will fix when production code in ts */
    this.index = this.index.bind(this);
    this.authorize = this.authorize.bind(this);
    this.token = this.token.bind(this);
  }

  index(req, res) {
    return res.sendFile(filePath);
  }

  /**
   * authorize route
   * payload must involve client_id, redirect_ui, response_type, grant_type and state for oauth
   * required fields for user validation: username, password
   * if everything goes well it will return access code on callback url
   * otherwise error on requested url
   */
  authorize(req, res, next) {
    console.log(this.debug);

    this.debug.log.flow('Initial User Authentication');

    // required oauth params
    const requiredParams = [
      'client_id',
      'redirect_uri',
      'response_type',
      'grant_type',
      'state',
    ];

    const requiredUserFields = ['username', 'password'];

    // validating input
    const validate = validateField(req.body, [
      ...requiredParams,
      ...requiredUserFields,
    ]);

    // recreate query url for callback
    const params = requiredParams.map((a) => `${a}=${req.body[a]}`).join('&');

    if (validate) {
      return res.redirect(`/oauth?success=false&${params}&error=${validate}`);
    }

    const { username, password } = req.body;
    if (username === 'username' && password === 'password') {
      req.body.user = { user: 1 };

      // valid user, authrize and send back autorize code
      return oauthServer.authorize({
        authenticateHandler: {
          handle: (req) => {
            this.debug.log.functionName('Authenticate Handler');
            return req.body.user;
          },
        },
      })(req, res);
    } else {
      return res.redirect(
        `/oauth?success=false&${params}&error=wrong username or password`
      );
    }
  }

  // generate token and send back
  token(req, res) {
    return oauthServer.token({
      requireClientAuthentication: {
        // whether client needs to provide client_secret
        // 'authorization_code': false,
      },
    })(req, res);
  }
}
module.exports = AuthController;
