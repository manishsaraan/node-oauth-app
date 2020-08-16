const express = require('express');

const app = express();
const port = process.env.PORT || 3030;
const bodyParser = require('body-parser');
const oauthServer = require('./oauth/server.js');
const debug = require('./utilities/debug.js');
const Routes = require('./routes');
const routes = new Routes(express);

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(debug.log.request());

app.use('/client', routes.get('client')); // Client routes
app.use('/oauth', routes.get('auth')); // routes to access the auth stuff

// Note that the next router uses middleware oauthServer.authenticate. That protects all routes within this middleware
app.use('/secure', oauthServer.authenticate(), routes.get('secure'));

// routes to access the protected stuff
app.use('/', (req, res) => res.redirect('/client'));

app.listen(port, () => console.log('Oauth Server listening on port ', port));
