/* eslint-disable no-alert, no-console */
const express = require('express')
const createError = require('http-errors'); 
const cors = require('cors')
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');  
const csp = require('express-csp-header');
const log = require('electron-log'); 
 
// Create express instnace
const app = express()



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});

app.use(csp({
  policies: {
      'default-src': [csp.SELF, csp.INLINE],
      'script-src': [csp.SELF, csp.INLINE],
      'style-src': [csp.SELF, csp.INLINE],
      'img-src': ['data:', csp.SELF],
      'worker-src': [csp.NONE],
      'block-all-mixed-content': false
  }
}));

// const md5 = require('md5');
// const graphqlHTTP = require('express-graphql')

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.use(users)
 
// app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
// });

// Export the server middleware
module.exports = {
  path: '/server',
  handler: app
}

/* eslint-enable no-alert */