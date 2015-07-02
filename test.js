'use strict'

var test = require('tape')
var assertFn = require('./')

test(function (t) {
  t.equal(assertFn(function () {}), true)
  t.throws(assertFn)
  t.end()
})
