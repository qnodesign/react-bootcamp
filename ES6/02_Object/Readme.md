## Manipulating objects in ES6 vs ES5

Objects get a major overhaul in ES6. Things like object destructuring and rest/spread operators made it working with objects very easy now. Let’s jump to the code and try to merge two objects in ES5.

```javascript
var obj1 = { a: 1, b: 2 };
var obj2 = { a: 2, c: 3, d: 4 };
var obj3 = Object.assign(obj1, obj2);
```

We have to merge the object using `Object.assign()` which takes both objects as input and outputs the merged object. Let’s take a look how we can tackle this problem in ES6.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 2, c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
```

Simple isn’t it ? The spread operator makes merging objects a breeze for the developer.

Let’s take a look at object destructuring now. If you have to extract multiple values from ES5 you have to write 3–4 lines of code like this:

```javascript
var obj1 = { a: 1, b: 2, c: 3, d: 4 };
var a = obj1.a;
var b = obj1.b;
var c = obj1.c;
var d = obj1.d;
```

Time consuming 😕. Oh wait! we have ES6 here to rescue us.

```javascript
const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, c, d } = obj1;
```

Cool! Last but not least look at another new feature for introduced for objects.

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
