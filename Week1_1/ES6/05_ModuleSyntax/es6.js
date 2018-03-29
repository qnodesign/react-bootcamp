//export

const myModule = {
	x: 1,
	y: () => {
		console.log('This is ES5');
	},
};
export default myModule;

//import

import myModule from './myModule';

//export children

export const module1 = { param: 1 };
export const module2 = { param: 2 };
export const module3 = { param: 3 };

//import children

import { module1, module2, module3 } from './myModule';
