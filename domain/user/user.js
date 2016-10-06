'use strict'
const Q = require('q')

const User = function (db) {
  this.db = db
}

User.prototype.findByUsername = function (username) {
  let defered = Q.defer()

  this.db.collection('users', {}, function (err, users) {
    if (err) {
      defered.reject(err)
    } else {
      users.find({username: username}).limit(1).next().then(function (foundUser) {
        defered.resolve(foundUser)
      })
    }
  })

  return defered.promise
}

User.prototype.register = function (emailId, username, password) {
  let defered = Q.defer()

  this.db.collection('users', {}, function (err, users) {
    if (err) {
      defered.reject(err)
    } else {
      let user = {
        emailId: emailId,
        username: username,
        password: password
      }

      users.insertOne(user).then(function (result) {
        defered.resolve(result.ops)
      }).catch(function (err) {
        defered.reject(err)
      })
    }
  })

  return defered.promise
}

module.exports = User
