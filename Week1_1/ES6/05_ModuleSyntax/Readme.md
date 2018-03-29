## Exporting & Importing Modules

exporting and importing module syntax changed completely with the introduction of ES6 specification. Let’s take a look how we export a module in ES5

```javascript
var myModule = {
	x: 1,
	y: function() {
		console.log('This is ES5');
	},
};
module.exports = myModule;
```

For more detils please read: [CommonJS.md](./CommonJS.md)

Here is the ES6 implementation

```javascript
const myModule = {
	x: 1,
	y: () => {
		console.log('This is ES5');
	},
};
export default myModule;
```

The ES6 syntax is more readable here. Alongside the export keyword ES6 also comes up with export default later on this firstly let’s take a look how importing a module changed in ES6.

Here is the ES5 version

```javascript
var myModule = require('./myModule');
```

Here is the ES6 version

```javascript
import myModule from './myModule';
```

Cool ha !!

### The export default:

When you export something using default we will import a module like this.

```javascript
import myModule from './myModule';
```

The above line means something like this, we exported a module by default and we have to import that whole module in your source file.

But ES6 also provides us with an ability to export and import multiple child modules or variables from a single module.

So in your module file you will export your module something like this

```javascript
export const x = 1;
export const y = 2;
export const z = 'String';
```

And import them something like this

```javascript
import { x, y, z } from './myModule';
```

Here we used ES6 object destruction to import multiple child modules from one single module.
