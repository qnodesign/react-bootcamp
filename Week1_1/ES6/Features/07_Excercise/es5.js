'use strict';

var _childModule_es = require('./childModule_es6');

var testVariable = 'test';

var initObj = {
	a: 'test' + testVariable,
	// arrow func
	b: function b(test) {
		return test || 'empty';
	},
	c: 'c',
	d: 'd',
};

// let or const

var blockScopeVar = 'no';

// simple random funciton yes or no
if (!!Math.floor(Math.random() * Math.floor(2))) {
	blockScopeVar = 'yes';
}

// use rest props instead of this solution (so remove c and d);
var newObj = {
	a: initObj.a,
	b: initObj.b,
};

// Promise instead of callback
var isGreater = function(a, b, callback) {
	var greater = false;
	if (a > b) {
		greater = true;
	}
	callback(greater);
};

var myModule = {
	// spread op.
	x: Object.assign({}, newObj, _childModule_es.alpha, _childModule_es.beta),
	// arrow function
	y: function y(a) {
		// variable concat
		return 'This is ES5 added variable: ' + a;
	},
	// shorthand
	isGreater: isGreater,
};

// Call the isGreater method of myModule and handle callback;
// Promise instead of callback
myModule.isGreater(1, 2, function(result) {
	if (result) {
		console.log('greater');
	} else {
		console.log('smaller');
	}
});
