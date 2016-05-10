var path = require('path');
var express = require('express');

var app = express();

var Conf = require('./modules/server_config')(app);
var Routes = require('./routes/routes.js')(app);

app.listen(3000, function(){
	console.log('Server is running');
});

