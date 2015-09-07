/*!
 * bind-arguments <https://github.com/tunnckoCore/bind-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var bindArguments = require('./index')

test('should throw TypeError if `fn` not function', function (done) {
  function fixture () {
    bindArguments(123)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `fn` be function/)
  done()
})

test('should throw TypeError if `args` not array', function (done) {
  function fixture () {
    bindArguments(function () {}, 123)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `args` be array/)
  done()
})

test('should be able to pass `ctx` as last argument', function (done) {
  var args = ['foo', 'bar']
  var ctx = {qux: 'qux'}
  var boundFn = bindArguments(function (foo, bar) {
    return {foo: foo, bar: bar, qux: this.qux}
  }, args, ctx)

  test.deepEqual(boundFn(), {foo: 'foo', bar: 'bar', qux: 'qux'})
  done()
})

test('should pass `ctx` bindArguments.call(ctx, fn, args)', function (done) {
  var args = ['foo']
  var ctx = {roo: 'roo'}
  var boundFn = bindArguments.call(ctx, function (foo, bar) {
    return {foo: foo, xyz: this.roo}
  }, args)

  test.deepEqual(boundFn(), {foo: 'foo', xyz: 'roo'})
  done()
})

test('should `ctx` be optional and works without passing it', function (done) {
  var boundFn = bindArguments(function (a, b, c) {
    return [a, b, c]
  }, ['foo', 'bar'])

  test.deepEqual(boundFn(), ['foo', 'bar', undefined])
  done()
})
