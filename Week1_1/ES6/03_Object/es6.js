//spread operator

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 2, c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };

//obj destruct

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, c, d } = obj1;

// shorthand

const a = 1;
const b = 2;
const c = 3;
const d = 4;
const obj1 = { a, b, c, d };

//rest param , spread operator

const myFunc = (a, b, ...rest) => {
	//rest returns = ['c','d'];
};

myFunc('a', 'b', 'c', 'd');
