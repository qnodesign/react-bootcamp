# `` `Tagged ${template} literals` ``

* The ES6 template literal syntax is simply `(Template literals are enclosed by the back-tick (`) (grave accent) character instead of double or single quotes).
* Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).

## Definition

_If there is an expression(custom handler function) preceding the template literal then it is called a "tagged template"._

Definitions are tough without context. Lets explore some different use cases to help understand what this means.

One feature that comes along with template literals, or template strings, is the ability to tag them, which are currently ignored by majority of the developers.

Basically we can run a template string through a function, and rather than have the browser immediately assign that value to a variable, we can have control over how this actual string is made, which is pretty cool and handy.

I’m going to share you some examples of when that would actually be useful in your code but first, let’s look at the working of it.

## Example #1 — Basic

```javascript
function highlight(strings, ...values) {
	// here i is the iterator for the strings array
	return strings.reduce((result, string, i) => {
		return `${result}${string} <cite>${values[i] || ''}</cite>`;
	}, '');
}

const author = 'Thomas A. Edison';
const statement = `I have not failed. I've just found 10,000 ways that won't work.`;
const quote = highlight`${statement} by ${author}`;
console.log(quote);
```

Here, we get an array of strings strings in pieces(first function parameter),

1.  (Empty string)
2.  by
3.  (Empty string)

After the array of all the strings, the subsequent arguments will be the values that are being interpolated. So the … rest of the values that are passed to that argument, and put them into an array for us values. This would be something like

`highlight([’’,’by’,’’], 'I have...etc’,’Thomas A. etc’)`

I believe that the above gives you a picture of what’s going on. Note that `strings` length is always greater than the number of arguments by one. Since the `strings` array is always going to be one larger than the `values` array, when we hit that last iteration , it’s only going to be a string and `values[i]` will have no value `undefined`. You could check if values of `[i]` is `undefined` and, if it is, then don’t put it on , a little trick you can do here is `${values[i] || ''}`

## Use cases

### 1. Escaping HTML tags

The following code is vulnerable to XSS attack, if `name` or `aboutme` are not sanitized:

```html
 <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/0.8.2/purify.min.js"></script>
 <script>
 function sanitize(strings, ...values) {
    const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''}`, '');
    console.log(dirty);
    console.log(aboutMe);
    return DOMPurify.sanitize(aboutMe);
  }
  const name = 'petyr baelish';
  const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');" />`;
  const html = sanitize`
    <h3>${name}</h3>
    <p>${aboutMe}</p>
  `;
  </script>
```

If it is not sanitized the `onload` will execute the javascript code after the image has been loaded. It is now purified with template literal. [Common-tag](https://github.com/declandewet/common-tags) is a popular library making use of tagged template literals extensively.

### 2. Language translation and internationalization

A library called [es2015-i18n-tag](https://github.com/skolmer/es2015-i18n-tag) uses tagged template literals to translate and localize texts. It allows you to write code that looks like this:

```javascript
console.log(i18n`Hello ${name}, you have ${amount}:c in your bank account.`);
// Hallo Steffen, Sie haben US$ 1,250.33 auf Ihrem Bankkonto.
```

It automatically localizes currencies and date formats. Notice the `:c` after `${amount}` in the above literal automatically adds the dollar sign. You can also specify explicitly if the global currency is different.

### 3. Writing CSS in JXS

This is how inline style is (written as an object) looks like in react. Following code is a react jsx snippet.

```jsx
<section style={{ padding: 4em;  background: papayawhip; }}>
  <h1 style={{  font-size: 1.5em;  text-align: center;  color: palevioletred; }}>  Hello World, this is my first styled component!</h1>
</section>
```

A library called [styled-components](https://github.com/styled-components/styled-components) aims to fix inline style in React using tagged template literals.
Here’s what their code looks like for the above snippet, more cleaner

```jsx
import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;

// Use them like any other React component – except they're styled!
<Wrapper>
	<Title>Hello World, this is my first styled component!</Title>
</Wrapper>;
```

Good examples can ba found in their [getting Started page](https://www.styled-components.com/docs/basics#getting-started), and live playground to write your own styled components.

## Bonus Points

As of ES2016, tagged templates conform to the rules of the following escape sequences:

* Unicode escapes started by “\u”, for example \u00A9
* Unicode code point escapes indicated by “\u{}”, for example \u{2F804}
* Hexadecimal escapes started by “\x”, for example \xA9
* Octal literal escapes started by “\” and (a) digit(s), for example \251

This means that a tagged template like the following is problematic, because, per ECMAScript grammar, a parser looks for valid Unicode escape sequences, but finds malformed syntax:

```javascript
tag`\unicode`;
```

For more details regarding this do checkout the [ECMAScript proposal](https://tc39.github.io/proposal-template-literal-revision/).

## Source:

[https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761](https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761)
Link: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
