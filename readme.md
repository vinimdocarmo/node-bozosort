# node-bozosort [![Build Status](https://travis-ci.org/vinimdocarmo/node-bozosort.svg?branch=master)](https://travis-ci.org/vinimdocarmo/node-bozosort)

For those who don't know, a Bozo Sort is a joke sorting algorithm that actually sorts but at horrible timing and is very inefficient.

**Note**: Do not use it in production, unless you're a bozo.

## Install

```
$ npm install --save bozosort
```


## Usage

```js
var bozosort = require('bozosort');

bozosort([5, 7, 3, 10, 4, 15, 1]);
//=> [1, 3, 4, 5, 7, 10, 15]
```


## API

### bozosort(list)

#### list

*Required*  
Type: `Array`


## License

MIT © [Vinícius do Carmo](http://vinimdocarmo.js.org)
