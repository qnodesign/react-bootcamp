import { alpha, beta } from './childModule_es6';

const testVariable = 'test';

const initObj = {
	// template
	a: `test: ${testVariable}`,
	b: test => test || 'empty',
	c: 'c',
	d: 'd',
};

let blockScopeVar = 'no';

// simple random funciton yes or no
if (!!Math.floor(Math.random() * Math.floor(2))) {
	blockScopeVar = 'yes';
}

const { a, b, ...rest } = initObj;

const isGreater = (a, b) => {
	return new Promise((resolve, reject) => {
		if (a > b) {
			resolve(true);
		} else {
			reject(false);
		}
	});
};

const myModule = {
	x: { ...rest, ...alpha, ...beta },
	y: a => `This is ES5 added variable: ${a}`,
	isGreater,
};

myModule
	.isGreater(1, 2)
	.then(result => {
		console.log('greater');
	})
	.catch(result => {
		console.log('smaller');
	});
