// server.js
// BASE SETUP

// =============================================================================
// call the packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// =============================================================================
// mangoose initialisation and call database
mongoose.connect('mongodb://XXXXXXX:XXXXXXX/XXXXX');

// =============================================================================
// set port and set public folder path
const port = process.env.PORT || 8000;
app.use(express.static('./public'));

// =============================================================================
// set template engine
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// =============================================================================
//To prevent errors from Cross Origin Resource Sharing, set headers to allow CORS with middleware:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
  next();
});

// =============================================================================
// render intial view on root route
app.get('/', function(req, res){
  res.render('index');
});

// =============================================================================
// api route to get data from mLab database. Use CVdata schema
const CVdata = require('./model_schema');
app.route('/api/data')
  .get(function(req, res) {
    CVdata.find(function(err, cvdatas){
      if(err) {
        res.send('Error', err);
      } else {
        res.json(cvdatas);
      }
    });
  });

app.listen(port);
console.log('Server running on port: ' + port);
