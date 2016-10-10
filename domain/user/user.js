'use strict'
const Q = require('q')

const User = function (db) {
  this.db = db
}

User.prototype.findByUsername = function (username) {
  let deferred = Q.defer()

  this.db.collection('users', {}, function (err, users) {
    if (err) {
      deferred.reject(err)
    } else {
      users.find({username: username}).limit(1).next().then(function (foundUser) {
        deferred.resolve(foundUser)
      }).catch(function (err) {
        deferred.reject(err)
      })
    }
  })

  return deferred.promise
}

User.prototype.register = function (emailId, username, password) {
  let deferred = Q.defer()

  this.db.collection('users', {}, function (err, users) {
    if (err) {
      deferred.reject(err)
    } else {
      let user = {
        emailId: emailId,
        username: username,
        password: password
      }

      users.insertOne(user).then(function (result) {
        deferred.resolve(result.ops)
      }).catch(function (err) {
        deferred.reject(err)
      })
    }
  })

  return deferred.promise
}

module.exports = User
