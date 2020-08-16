const OAuthServer = require('express-oauth-server');
const model = require('./model');

/**
 * Oauth is going to be handle by this
 * visit this for more info:- https://oauth2-server.readthedocs.io
 */
module.exports = new OAuthServer({
  model: model,
  grants: ['authorization_code', 'refresh_token'],
  accessTokenLifetime: 60 * 60 * 24, // 24 hours, or 1 day
  allowEmptyState: true,
  allowExtendedTokenAttributes: true,
});
