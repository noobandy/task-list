'use strict'

const path = require('path')
const config = require(path.join(__dirname, '../config/config'))
const Code = require('Code')
const Lab = require('lab')
const lab = module.exports.lab = Lab.script()

lab.test('returns true if db url is mongodb://localhost/task-list-test', function (done) {
  Code.expect(config.get('db:url')).to.equal('mongodb://localhost/task-list-test')
  done()
})
