'use strict';

let january = require('wikijs').default().page('January');

module.exports = {
	data : () => january.then(page => page.content()),
	images : () => january.then(page => page.images())
};