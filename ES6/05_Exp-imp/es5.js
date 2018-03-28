//import

var myModule = require('./myModule');

//export

var myModule = {
	x: 1,
	y: function() {
		console.log('This is ES5');
	},
};
module.exports = myModule;
