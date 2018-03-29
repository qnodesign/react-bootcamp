//variable declaration

var x = 'outside';
function foo() {
	var x = 'inside';
	console.log(x);
}
foo(); // inside
console.log(x); // outside

// w/o var

x = 'outside';
function foo() {
	x = 'inside';
	console.log(x);
}
foo(); // inside
console.log(x); // inside

// Hoisting

console.log(j); // ReferenceError: j is not defined
console.log(i); // undefined
var i = 0;

var i2;
console.log(i2);
i2 = 0;

// Function scope

function foo() {
	var i = 0;
}
i; // ReferenceError: i is not defined

// Block scope

var i = 0;
if (true) {
	var i = 1;
}
i; // 1
