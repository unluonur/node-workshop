var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var authenticate = require('./middleware/authenticate');
var authorize = require('./middleware/authorize');
var errorHandler = require('./middleware/error-handler');

var index = require('./routes/index');
var profile = require('./routes/profile');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


/*
app.get('/', function(req, res) {
	res.send('index');
});
*/

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: 'hello node'}));
app.use(authenticate);
app.use('/', index);
app.use('/profile', authorize);
app.use('/profile', profile);
app.use(errorHandler);

var server = app.listen(3000, function() {
	console.log('app listening on port 3000');
});

