// let

let i = 0;
if (true) {
	let i = 1;
}
i; // 0

// const

const i = 0;
i = 1; // TypeError: Assignment to constant variable.

if (true) {
	const i = 0;
}
i; // ReferenceError: i is not defined

const obj = {
	i: 0,
};
obj.i = 1;
obj.i; // 1
