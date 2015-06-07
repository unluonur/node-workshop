var express = require('express');

module.exports = function(req, res, next) {
	if(req.user) {
		return next();
	}
	res.redirect('/login');
};
