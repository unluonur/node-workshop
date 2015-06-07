var Datastore = require('nedb');

var db = {};

db.users = new Datastore();

module.exports = db;
