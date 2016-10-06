'use strict'

const path = require('path')
const server = require(path.join(__dirname, 'api/server'))

server.start(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('server started at localhost:3000, listening for incomming requests....')
  }
})
