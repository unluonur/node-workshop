var express = require('express');
var db = require('./../db');

module.exports = function(req, res, next) {
	if(req.session.userid) {
		db.users.findOne({_id: req.session.userid}, function(err, user) {
			if(err) {
				return next(err);
			}
			req.user = user;
			return next();
		});
	}
	else {
		return next();
	}
};
