# var, let, or const?

## ES5

### Review: Variable Declarations

It’s important to intentionally declare your variables within a specific scope, using var, to keep your code clear and maintainable.

```javascript
var x = 'outside';
function foo() {
	var x = 'inside';
	console.log(x);
}
foo(); // inside
console.log(x); // outside
```

Above code properly declares x both outside and inside the function using var.
What happens without var?

```javascript
x = 'outside';
function foo() {
	x = 'inside';
	console.log(x);
}
foo(); // inside
console.log(x); // inside
```

x outside the function was overwritten by x inside the function because we didn’t specify that x was to be scoped only to foo!

#### Hoisting Best Practices

Always use var (even in the global scope) and move the declaration to the top of the current scope for maximum clarity.

OK:

```javascript
console.log('sup');
var i = 0;
```

Better:

```javascript
var i = 0;
console.log('sup');
```

### Review: Hoisting

Variables declared using var are always hoisted to the top of their scope.

```javascript
console.log(j); // ReferenceError: j is not defined
console.log(i); // undefined
var i = 0;
```

The variable j was never declared, so we get an error saying “I’ve never heard of j!”.

i was declared before being logged due to hoisting. Here is how the interpreter executed it:

```javascript
var i;
console.log(i);
i = 0;
```

The interpreter moved (e.g. “hoisted”) the variable declaration to the top of the scope (global, in this case).

However, the variable was not assigned to 0 yet. undefined says “I know i exists, but I don’t know what value i points to because you didn’t assign it to anything”.

Supplement1: What if var refers to a function?
Supplement2: Hoisting doesn’t physically “move” your code — MDN

#### Function Scope

var's are function-scoped: scope is limited to the function it was defined in.

```javascript
function foo() {
	var i = 0;
}
i; // ReferenceError: i is not defined
```

i only exists within foo so we get an error: “I’ve never heard of i!”.

#### Block Scope

var’s are not block-scoped: scope is not limited to the block it was defined in.

```javascript
var i = 0;
if (true) {
	var i = 1;
}
i; // 1
```

i was still in the “global scope” within the if block. i's value was overwritten, which may have not been the intention.

## ES6

### let

let variables are block-scoped! Their more specific scope defends against errors. Many developers have stopped using var since let was released in ES6.

```javascript
let i = 0;
if (true) {
	let i = 1;
}
i; // 0
```

Even though i was assigned to 1 in the if block, that assignment was local to the block and therefore our “global” i was still 0.
let prevents variables from being overwritten accidentally!

Link: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

### const

const defends the variable from being overwritten.

```javascript
const i = 0;
i = 1; // TypeError: Assignment to constant variable.
```

const, like let, is block scoped.

```javascript
if (true) {
	const i = 0;
}
i; // ReferenceError: i is not defined
```

const does allow mutability: the value can change if it’s mutable, such as an Object or an Array.

```javascript
const obj = {
	i: 0,
};
obj.i = 1;
obj.i; // 1
```

Many have completely stopped using var, opting to use const for variables that won’t change and let otherwise. These new keywords provide more specific scope → less errors and improved readability/maintainability.

Link: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
