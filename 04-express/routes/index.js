var express = require('express');
var router = express.Router();

var db = require('./../db');

router.get('/', function(req, res) {
	res.render('index', { title: 'Hello Node.JS!' });
});

router.get('/login', function(req, res) {
	res.render('login', { title: 'Kullanıcı Girişi' });
});

router.post('/login', function(req, res, next) {
	db.users.findOne({
		email: req.body.email,
		password: req.body.password
	}, function(err, user) {
		if(err) {
			return next(err);
		}
		if(!user) {
			return res.render('login', {
				title: 'Kullanıcı Girişi',
				error: 'Hatalı kullanıcı adı yada şifre'
			});
		}
		req.session.userid = user._id;
		res.redirect('/profile');
	});
});

router.get('/register', function(req, res) {
	res.render('register', { title: 'Kullanıcı Kayıt' });
});

router.post('/register', function(req, res, next) {
	db.users.insert({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		password: req.body.password
	}, function(err, user) {
		if(err) {
			return next(err);
		}
		req.session.userid = user._id;
		res.redirect('/profile');
	});
});

module.exports = router;
