//variable declaration

var x = 'outside';
function foo() {
	var x = 'inside';
	console.log(x);
}
foo(); // inside
console.log(x); // outside

x = 'outside';
function foo() {
	x = 'inside';
	console.log(x);
}
foo(); // inside
console.log(x); // inside
