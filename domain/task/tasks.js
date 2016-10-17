'use strict'

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
  return new Promise((resolve, reject) => {
    this.db.collection('tasks', {}, (err, tasks) => {
      if (err) {
        reject(err)
      } else {
        tasks.insertOne(task).then((result) => resolve(result.ops)).catch((err) => reject(err))
      }
    })
  })
}

Task.prototype.update = function (task) {

}

Task.prototype.complete = function (taskId) {

}

Task.prototype.delete = function (taskId) {

}

module.exports = Task
