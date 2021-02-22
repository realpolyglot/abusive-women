const abusers = require('./index')
const tap = require('tap')

tap.true(Array.isArray(abusers))
