'use strict'

const Q = require('q')

const Task = function (db) {
  this.db = db
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

Task.prototype.find = function (username, options) {

}

Task.prototype.create = function (task) {
  let deferred = Q.defer()
  this.db.collection('tasks', {}, function (err, tasks) {
    if (err) {
      deferred.reject(err)
    } else {
      tasks.insertOne(task).then(function (result) {
        deferred.resolve(result.ops)
      }).catch(function (err) {
        deferred.reject(err)
      })
    }
  })

  return deferred.promise
}

Task.prototype.update = function (task) {

}

Task.prototype.complete = function (taskId) {

}

Task.prototype.delete = function (taskId) {

}

module.exports = Task
