# JSX

## Introduction

```jsx
const element = <h1>Hello, world!</h1>;
```

## JSX In Depth

Fundamentally, JSX just provides syntactic sugar for the `React.createElement(component, props, ...children)` function. The JSX code:

```jsx
<MyButton color="blue" shadowSize={2}>
	Click Me
</MyButton>
```

compiles into:

```javascript
React.createElement(MyButton, { color: 'blue', shadowSize: 2 }, 'Click Me');
```

## Sources

* [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

* [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
