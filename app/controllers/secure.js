class SecureRoutes {
  constructor(debug) {
    this.debug = debug;

    this.index = this.index.bind(this);
  }

  index(req, res) {
    // Successfully reached if can hit this :)
    this.debug.log.variable({
      name: 'res.locals.oauth.token',
      value: res.locals.oauth.token,
    });

    return res.json({ success: true });
  }
}

module.exports = SecureRoutes;
