# assert-function [![Build Status](https://travis-ci.org/bendrucker/assert-function.svg?branch=master)](https://travis-ci.org/bendrucker/assert-function) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/assert-function.svg)](https://greenkeeper.io/)

> Assert that a value is a function

## Install

```
$ npm install --save assert-function
```

## Usage

```js
var assertFunction = require('assert-function')

assertFunction(function () {})
//=> noop

assertFunction('foo')
// => TypeError: Expected function, got: foo
```

## API

#### `assertFunction(value)` -> `undefined`

##### value

*Required*  
Type: `any`

A value to check. A `TypeError` is throw for non-function values.

## License

MIT © [Ben Drucker](http://bendrucker.me)
