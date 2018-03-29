# An Introduction to CommonJS

The CommonJS specification includes a [module loading syntax](http://wiki.commonjs.org/wiki/Modules/1.1) to cleanly specify JavaScript dependencies. While first widely used in Node it was used heavily also in the browser as well (in ES5). Historically, when specifying dependencies for the browser, we have had to manually manage a list of our files and keep them in the right order. For the modules to communicate, everything had to be in global scope.

eg.

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="d3.js" type="text/javascript"></script>
<script src="charts.js" type="text/javascript"></script>
<script src="myfiles/file1.js" type="text/javascript"></script>
<script src="myfiles/file2.js" type="text/javascript"></script>
<script src="myfiles/file3.js" type="text/javascript"></script>
<script src="myfiles/file4.js" type="text/javascript"></script>
<script src="myfiles/file5.js" type="text/javascript"></script>
<script src="myfiles/file6.js" type="text/javascript"></script>
```

## The Basics of CommonJS

With CommonJS modules, every file explicitly states its dependencies, letting the tooling figure out what the ordering is. Using CommonJS modules also keeps us from polluting the global namespace which enables engineers to now write and distribute high quality libraries with shared dependencies.

Every CommonJS module is given two main globals: `module.exports` and `require`.

```javascript
module.exports = 'This is a string';
```

```javascript
var foo = require('./foo');
assert.equal(foo, 'This is a string');
```

## `Require` Caches Modules

From [Good Eggs](http://bites.goodeggs.com/posts/export-this/): “An important behavior of `require` is that it caches the value of `module.exports` and returns the same value for all future calls to `require`. It caches based on the absolute file path of the required file.”

```javascript
var f1 = require('/usr/local/projects/export_this/function');
var f2 = require('./function'); // Same location, different string parameter
assert(f1 === f2); // true
```

You can see that `require` is returning the same reference for each call.

## Different Exporting Styles

There are a few different ways that you can and should export from your module. They are good for different times and different uses. Exporting objects and classes are the most common patterns we use.

* Objects
* Classes
* Singletons
* Monkey Patch

### Objects

```javascript
var keys = {
	8: 'backspace',
	9: 'tab',
	13: 'enter',
	16: 'shift',
	17: 'ctrl',
	18: 'alt',
};

module.exports = keys;
```

```javascript
var keys = require('./keys');

document.addEventListener('keyup', function(e) {
	var key = keys[e.keyCode];
});
```

You can also use this style to return a collection of functions that don’t share any state:

```javascript
var keys = require('./keys');

var Utils = {
	convertKeyCode: function(keyCode) {
		return keys[keyCode];
	},

	printMyName: function() {
		console.log('whee');
	},
};

module.exports = Utils;
```

```javascript
var Utils = require('./utils');

Utils.printMyName();
```

### Classes

If you want to have multiple instances with shared state, then you should probably be exporting a class.

```javascript
function Person(name) {
	this.name = name;
}

Person.prototype = {
	setName: function(name) {
		this.name = name;
	},

	speak: function() {
		console.log('Hi, my name is ' + this.name);
	},
};

module.exports = Person;
```

```javascript
var Person = require('./person.js');

var eli = new Person('Eli');
eli.speak();
```

### Singletons

Since `require` caches the value assigned to `module.exports`, all calls to require the module are given the same reference. This makes creating a singleton extremely similar to creating a class. We simply return a new instance of our class.

```javascript
function Db() {}

Db.prototype = {
	connect: function(dsn) {},
	query: function(obj) {},
};

// There will only ever be one instance of the database class
module.exports = new Db();
```

```javascript
var db = require('./db');

db.connect();
db.query();
```

### Monkey Patch

Warning! This pattern is dangerous and should rarely ever be used. Monkey patches are modules that modify global state. You may also hear them called shims.

```javascript
Function.prototype.bind = ... // modify global state
```

```javascript
require('./shim');

var foo = function() {};

// Foo now has .bind
foo.bind(this);
```

This is typically a very dangerous pattern to follow because it breaks the dependency graph of the application. Depending on where `shim` is required we could be changing the behavior of our application.

This is typically only a reasonable thing to do if you are importing polyfills at the very top of your application. This will have pretty much the same behavior as saying:

```html
<script src="//cdn.jsdelivr.net/polyfills/shim.js"></script>
<script src="startup.js"></script>
```
