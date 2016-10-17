'use strict'
const User = function (db) {
  this.db = db
}

User.prototype.findByUsername = function (username) {
  return new Promise((resolve, reject) => {
    this.db.collection('users', {}, (err, users) => {
      if (err) {
        reject(err)
      } else {
        users.find({username: username}).limit(1).next().then((foundUser) => resolve(foundUser)).catch((err) => reject(err))
      }
    })
  })
}

User.prototype.register = function (emailId, username, password) {
  return new Promise((resolve, reject) => {
    this.db.collection('users', {}, (err, users) => {
      if (err) {
        reject(err)
      } else {
        let user = {
          emailId: emailId,
          username: username,
          password: password
        }

        users.insertOne(user).then((result) => resolve(result.ops)).catch((err) => reject(err))
      }
    })
  })
}

module.exports = User
