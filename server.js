var express = require('express'),
    app = express(),
    port = process.env.PORT || 8787,
    bodyParser = require('body-parser');
    
    var authMethod = require('./Controller/AuthController');
    var getMethod = require('./Controller/GetController');
    var postMethod = require('./Controller/PostController');
    var putMethod = require('./Controller/PutController');
    var delMethod = require('./Controller/DelController');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);