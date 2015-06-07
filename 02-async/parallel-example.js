var async = require('async');

function fn1(callback) {
	console.log('start fn1');
	setTimeout(function() {
		console.log('end fn1');
		callback(null, 1);
	}, 500);
}

function fn2(callback) {
	console.log('start fn2');
	setTimeout(function() {
		console.log('end fn2');
		callback(null, 2);
	}, 500);
}

function fn3(callback) {
	console.log('start fn3');
	setTimeout(function() {
		console.log('end fn3');
		callback(null, 3);
	}, 500);
}

async.parallel([fn1, fn2, fn3], function(err, results) {
	if(err) {
		return console.log(err);
	}
	console.log(results);
});
