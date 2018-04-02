# ES6 Features

Each release brings updates and new features to the language.

At the latest TC39 meeting the new features that will make it into the **“ECMAScript® 2018 Language Specification”** (ES2018) have been selected. All proposals that have reached stage-4 since the consolidation of [ES2017](https://www.bram.us/2017/07/18/es2017-es8-language-features/) got selected.

Quick look at the features that made it into ES2018.

## Rest/Spread Properties

When destructuring, [Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread) allow you to collect the remaining properties of an object into a new object.

```javascript
const input = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...x } = input;

console.log(a); // 1
console.log(b); // 2
console.log(x); // { c: 3 ,d: 4 }
```

Rest/Spread Properties provide you with a good way to [remove a property from an object in an immutable way](https://www.bram.us/2018/01/10/javascript-removing-a-property-from-an-object-immutably-by-destructuring-it/).

```jsx
class MyComponent extends React.Component {
  render() {
    const {test, ...props} = this.props;
  }
  return <View {...props}>{/* … */}</View>;
}

// usage
<MyComponent test={test} param="something" />
```

## Asynchronous Iteration

With [Asynchronous Iteration](https://github.com/tc39/proposal-async-iteration) we get asynchronous iterators and asynchronous iterables. Asynchronous iterators just like regular iterators, except their `next()` method returns a promise for a `{ value, done }` pair. To consume asynchronous iterables, we can now use the `await` keyword with `for … of` loops.

```javascript
for await (const line of readLines(filePath)){
  console.log(line);
}
```

## Promise.prototype.finally()

[`Promise.prototype.finally()`](https://github.com/tc39/proposal-promise-finally) finalizes the whole promises implementation, allowing you to register a callback to be invoked when a promise is settled (either fulfilled, or rejected).

A typical use case is to hide a spinner after a `fetch()` request: instead of duplicating the logic inside the last `.then()` and `.catch()`, one can now place it inside `.finally()`

```javascript
fetch('http://exapmle.com/endpoint')
	.then(result => {
		// …
	})
	.catch(err => {
		// …
	})
	.finally(() => {
		// …
	});
```

## RegExp related features

In total 4 RegExp related proposals made it into ES2018:

* [`s` (`dotAll`) flag for regular expressions](https://github.com/tc39/proposal-regexp-dotall-flag)
* [RegExp named capture groups](https://github.com/tc39/proposal-regexp-named-groups)
* [RegExp Lookbehind Assertions](https://github.com/tc39/proposal-regexp-lookbehind)
* [RegExp Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)

More info on these features can be found at Mathias Bynens — one of the driving forces behind these proposals — his blog: [ECMAScript regular expressions are getting better!](https://mathiasbynens.be/notes/es-regexp-proposals)

## Other new Features

To top it off [a tweak to template literals](https://github.com/tc39/proposal-template-literal-revision) landed: when using tagged template literals the restriction on escape sequences are removed, thus allowing things like \xerxes. Before this tweak an error would be thrown because \x is the start of a hex escape with erxes not being a valid hex value.

[Feature in details:](06_TemplateLiteral)

## Sources:

* [Medium: JavaScript: What’s new in ECMAScript 2018 (ES2018)?](https://medium.com/front-end-hacking/javascript-whats-new-in-ecmascript-2018-es2018-17ede97f36d5)
