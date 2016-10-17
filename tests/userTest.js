'use strict'

const path = require('path')

const User = require(path.join(__dirname, '../domain/user/user'))

const dal = require(path.join(__dirname, '../dal/dal'))

dal.then(function (db) {
  let userSerive = new User(db)

  userSerive.register('anandm@mkcl.org', 'anandm123', 'anandm123', 'Anand Mohan').then(function (result) {
    console.log(result)
  }).catch(function (err) {
    console.log(err)
  })

  userSerive.findByUsername('anandm123').then(function (result) {
    console.log(result)
  }).catch(function (err) {
    console.log(err)
  })
})
