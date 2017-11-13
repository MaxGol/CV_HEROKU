// server.js
// BASE SETUP

// =============================================================================
// call the packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// =============================================================================
// mangoose initialisation and call database
mongoose.connect('mongodb://maxgolubev:Maxest1976@ds113935.mlab.com:13935/nodeapi');

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
