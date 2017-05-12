var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var routes = require('./route/index.js');
var api1 = require('./api/time-stamp.js');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use( express.static('public'));

api1(app);
routes(app);


app.listen(8080);
