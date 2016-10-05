'use strict';

const path = require('path');

const dal = require(path.join(__dirname, "../dal/dal"));

dal.then(function(db) {
	console.log(db);
	db.collection('users',{}, function(err, users) {
		console.log(err);
		users.find({username: 'anandm'}).limit(1).next().then(function(user) {
			console.log(user);
		});

	});
}).catch(function(err) {
	console.log(err);
});