'use strict';

const Task = function(db) {
	this.db = db;
}

/*
	options = {
		page: page no.
		pageSize: no. of records per page
		type: {
			all: all tasks
			completed: completed tasks only
			pendinf: pending task only
			}
	}
*/

Task.prototype.find = function(username, options) {
	
};

Task.prototype.create = function(task) {

};

Task.prototype.update = function(task) {

};

Task.prototype.complete = function(taskId) {

};

Task.prototype.delete = function(taskId) {

};




module.exports.Task = Task;