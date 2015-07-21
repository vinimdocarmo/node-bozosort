'use strict';

var assert = require('assert');
var bozosort = require('./');

it('should sort the interger list', function () {
	assert.deepEqual(bozosort([5, 7, 3, 10, 4, 15, 1]), [1, 3, 4, 5, 7, 10, 15]);
});

it('should throw a TypeError if an array is not passed as the first argument', function() {
	try {
		bozosort(null);
	} catch(e) {
		assert.equal(e.message, 'Expected an array');
	}
});
