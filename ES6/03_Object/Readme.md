# Manipulating objects in ES6 vs ES5

Objects get a major overhaul in ES6. Things like object destructuring and rest/spread operators made it working with objects very easy now. Let’s jump to the code and try to merge two objects in ES5.

```javascript
var obj1 = { a: 1, b: 2 };
var obj2 = { a: 2, c: 3, d: 4 };
var obj3 = Object.assign(obj1, obj2);
```

We have to merge the object using `Object.assign()` which takes both objects as input and outputs the merged object.
In ES6 it can be done with the spread operator

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 2, c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
```

## Destructing

### Object destructuring

```javascript
const obj = { first: 'Jane', last: 'Doe' };
```

ES5

```javascript
var first = obj.first;
var last = obj.last;
```

ES6

```javascript
const { first: f, last: l } = obj;
// f = 'Jane'; l = 'Doe'
// {prop} is short for {prop: prop}
const { first, last } = obj;
// first = 'Jane'; last = 'Doe'
```

Destructuring helps with processing return values:

```javascript
const obj = { foo: 123 };

const { writable, configurable } = Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable, configurable); // true true
```

### Array destructuring

Array destructuring (works for all iterable values):

```javascript
const iterable = ['a', 'b'];
const [x, y] = iterable; // x = 'a'; y = 'b'
```

Destructuring helps with processing return values:

```javascript
const [all, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2999-12-31');
```

### Destructing in detail

[more info](http://exploringjs.com/es6/ch_destructuring.html)

## Define object

We define a object like this in ES5

```javascript
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var obj1 = { a: a, b: b, c: c, d: d };
```

In ES6 you will do something like this:

```javascript
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var obj1 = { a, b, c, d };
```

Yeah, if the name of the key and the variable we are going to assign to that key are same you can use this shorthand.

## Rest operator:

If the last named argument of a function is prefixed with `...`, it becomes an array whose elements from 0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.

```javascript
function f(a, b, ...theArgs) {
	// ...
}
```

In the above example, theArgs would collect the third argument of the function (because the first one is mapped to a, and the second to b) and all the consecutive arguments.
