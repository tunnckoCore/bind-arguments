/*!
 * bind-arguments <https://github.com/tunnckoCore/bind-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isArray = require('isarray')

module.exports = function bindArguments (fn, args, thisArg) {
  if (typeof fn !== 'function') {
    throw new TypeError('bind-arguments expect `fn` be function')
  }
  if (!isArray(args)) {
    throw new TypeError('bind-arguments expect `args` be array')
  }
  var ctx = thisArg || this
  return fn.bind.apply(fn, [ctx].concat(args))
}
