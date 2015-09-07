# [bind-arguments][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Bind context (optional) and multiple arguments to function.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i bind-arguments --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var bindArguments = require('bind-arguments')

var args = ['foo', true, 'bar', 123]
var ctx = {qux: 'qux'}

var boundFn = bindArguments(function fn (foo, bool, bar, num) {
  console.log(foo, bool, bar, num, this.qux)
}, args, ctx)

boundFn()
//=> foo true bar 123 qux

boundFn.call({qux: 'xyz'})
//=> foo true bar 123 xyz
```


## Related
- [array-slice](https://github.com/jonschlinkert/array-slice): Array-slice method. Slices `array` from the `start` index up to, but not including, the `end` index.
- [bind-context](https://github.com/tunnckocore/bind-context): Bind context to the given function and preserves her name. Or set new name of the given function. It also handles `.toString` correctly.
- [handle-arguments](https://github.com/hybridables/handle-arguments): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow.
- [manage-arguments](https://github.com/tunnckocore/manage-arguments): Prevents arguments leakage - managing arguments. From Optimization killers by Petka Antonov.
- [sliced](https://github.com/aheckmann/sliced): A faster Node.js alternative to Array.prototype.slice.call(arguments)
- [useware](https://github.com/tunnckocore/useware): Accept Arguments object or multiple arguments that can be any value, including deeply nested arrays. Flatten the arguments/values then filter them to be only functions. Useful for `.use` methods.
- [useware-context](https://github.com/tunnckocore/useware-context): Much like `useware` but with the ability to bind given context to each function.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/bind-arguments/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/bind-arguments
[npmjs-img]: https://img.shields.io/npm/v/bind-arguments.svg?label=bind-arguments

[license-url]: https://github.com/tunnckoCore/bind-arguments/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/bind-arguments
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/bind-arguments.svg

[travis-url]: https://travis-ci.org/tunnckoCore/bind-arguments
[travis-img]: https://img.shields.io/travis/tunnckoCore/bind-arguments.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/bind-arguments
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/bind-arguments.svg

[david-url]: https://david-dm.org/tunnckoCore/bind-arguments
[david-img]: https://img.shields.io/david/tunnckoCore/bind-arguments.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg