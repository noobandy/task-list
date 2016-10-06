'use strict'

const path = require('path')
const nconf = require('nconf')

nconf.argv()

nconf.env()

let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'

nconf.file({file: path.join(__dirname, env + '.json')})

module.exports = nconf
