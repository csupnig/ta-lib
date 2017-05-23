# ta-lib [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> A technical analysis library written in JavaScript/TypeScript

This library is used on cointelligence.net for calculating indicators and provides a base for trade strategies.

Read more on my website [https://www.supnig.com/blog/ta-lib](https://www.supnig.com/blog/ta-lib)

## Installation

Install `ta-lib` as a dependency:

```shell
npm install ta-lib
```

## Usage

### In your `module`:

```javascript
var talib = require('ta-lib'),
    sma = talib.SMA([23,34,12,34,23], 12);
```

Where the passed array of prices has the most recent at its 0-index.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/ta-lib
[npm-image]: https://badge.fury.io/js/ta-lib.png

[travis-url]: http://travis-ci.org/csupnig/ta-lib
[travis-image]: https://secure.travis-ci.org/csupnig/ta-lib.png?branch=master

[depstat-url]: https://david-dm.org/csupnig/ta-lib
[depstat-image]: https://david-dm.org/csupnig/ta-lib.png
