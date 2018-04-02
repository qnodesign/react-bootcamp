# Typescript

## Introduction

TypeScript is a strongly-typed superset of JavaScript, which means it adds some syntactical benefits to the language while still letting you write normal JavaScript if you want to. It encourages a more declarative style of programming through things like interfaces and static typing (more on these later), offers modules and classes, and most importantly, integrates relatively well with popular JavaScript libraries and code. You could think of it as a strongly static layer over current JavaScript that has a few features to make life (and debugging especially) a bit more bearable.

TypeScript gained particular attention a few years ago because it was selected for full support by Angular 2 and following (which is also written in TypeScript itself). It’s also developed by Microsoft, which means it has the backing of two major tech companies (not a bad place for any language). Since this time, it’s gained more of a following and mainstream status.

Needless to say, TypeScript is definitely worth looking into.

How Does it Work?
TypeScript actually looks much like modern JavaScript. At the most basic level, it introduces a static typing paradigm to JavaScript, so instead of the following:

```javascript
var name = “Susan”,
    age = 25,
    hasCode = true;
```

We could write the following:

```javascript
let name: string = 'Susan',
	age: number = 25,
	hasCode: boolean = true;
```

## Sources

* [Typescript](http://www.typescriptlang.org/)
* [TS React starter](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)

* [Introduction to TS](https://www.sitepoint.com/introduction-to-typescript/)
