## Reducing code with Arrow Function

Arrow functions brought a lot of clarity & code reduction to Javascript. Let’s take a look at different ways we can define function now.

Here is the ES5 version

```javascript
function greetings(name) {
	return 'hello ' + name;
}
```

Now take a look at different ways we can define function in ES6

```javascript
const greetings = name => {
	return `hello ${name}`;
};
```

You can see the difference we don’t have to use the function keyword to define the function now but that’s now a big improvement right ?

Have a look at another way we can define a function in ES6

```javascript
const greetings = name => `hello ${name}`;
```

This is some code reduction we are talking about earlier. In ES6 if your function has a single parameter then you can altogether ditch the parenthesis around the parameter.

Another thing to notice that we don’t have to write the return keyword to return the computed value, in ES6 if you don’t write function body inside braces the computed expression automatically get returned when the function will be executed.

Link: [MDN](https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
