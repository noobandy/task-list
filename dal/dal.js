'use strict'

const path = require('path')

const config = require(path.join(__dirname, '../config/config'))

const MongoClient = require('mongodb').MongoClient

module.exports = MongoClient.connect(config.get('db:url'))
