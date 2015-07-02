'use strict'

var test = require('tape')
var assertFn = require('./')

test(function (t) {
  t.doesNotThrow(assertFn.bind(null, function () {}))
  t.throws(assertFn)
  t.end()
})
