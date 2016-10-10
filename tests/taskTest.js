'use strict'

const path = require('path')
const dal = require(path.join(__dirname, '../dal/dal'))
const Task = require(path.join(__dirname, '../domain/task/tasks'))
const Code = require('code')
const Lab = require('lab')

const lab = module.exports.lab = Lab.script()

lab.experiment('tasks', function () {
  let taskService = null
  lab.before(function (done) {
    dal.then(function (db) {
      taskService = new Task(db)
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  lab.test('it should save new task to db', function (done) {
    taskService.create({
      username: 'anandm123',
      task: 'some task',
      completedAt: null,
      deletedAt: null,
      createdAt: new Date(),
      dueDate: new Date()
    }).then(function (result) {
      Code.expect(result._id).to.not.be.undefined
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  lab.after(function (done) {
    taskService = null
    done()
  })
})

