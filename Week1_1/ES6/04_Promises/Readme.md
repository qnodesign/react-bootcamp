## Promises vs Callbacks

Javascript is an Async language we all know that. This feature gives us a lot of freedom when we write code. We have a non-blocking architecture in our hand because of which we can write non-dependent code easily.

Here is an example how we write an Async function in ES5

```javascript
function isGreater(a, b, cb) {
	var greater = false;
	if (a > b) {
		greater = true;
	}
	cb(greater);
}
isGreater(1, 2, function(result) {
	if (result) {
		console.log('greater');
	} else {
		console.log('smaller');
	}
});
```

Above we defined a function named isGreater , which takes three arguments a , b and cb . When executed the function check if a greater than b and make the greater variable true , if not greater stays false . After that isGreater calls the callback function cb and pass the greater variable as the argument to the function.

In the next piece of code we call the isGreater function pass it a andb alongside our callback function. Inside callback function we check if the result is true or false and shows message according to it. Now let’s see how ES6 have handled this.

```javascript
const isGreater = (a, b) => {
	return new Promise((resolve, reject) => {
		if (a > b) {
			resolve(true);
		} else {
			reject(false);
		}
	});
};
isGreater(1, 2)
	.then(result => {
		console.log('greater');
	})
	.catch(result => {
		console.log('smaller');
	});
```

The ES6 Promises allows us to resolve and reject a request. Whenever we resolve a request it will call the callback provided in then and whenever we reject a request it will call the catch callback.

The ES6 promises are better then callback because it allows us to distinguish easily between a success and error so we don’t have to check again for things in our callback function.
