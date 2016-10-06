'use strict'
const path = require('path')
const dal = require(path.join(__dirname, '../dal/dal'))
const Code = require('Code')
const Lab = require('lab')
const lab = module.exports.lab = Lab.script()

lab.test('returns true if db connection is defined', function (done) {
  dal.then(function (db) {
    Code.expect(db).not.to.be.undefined
    done()
  }).catch(function (err) {
    done(err)
  })
})

