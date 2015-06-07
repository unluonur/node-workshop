var express = require('express');
var router = express.Router();
var db = require('./../db');

router.get('/', function(req, res, next) {
	var user = req.user;
	res.render('profile', {
		title: 'Profil Güncelleme',
		firstname: user.firstname,
		lastname: user.lastname,
		email: user.email
	});
});

router.post('/', function(req, res, next) {
	db.users.update({_id: req.session.userid}, {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email
	}, function(err, user) {
		if(err) {
			return next(err);
		}
		res.render('profile', {
			title: 'Profil Güncelleme',
			message: 'Güncelleme Başarılı',
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email
		});
	})
});

module.exports = router;
