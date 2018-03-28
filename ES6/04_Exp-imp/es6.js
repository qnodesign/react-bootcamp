//import

import myModule from './myModule';

//export

const myModule = {
	x: 1,
	y: () => {
		console.log('This is ES5');
	},
};
export default myModule;

//export import child

export const x = 1;
export const y = 2;
export const z = 'String';

//= >

import { x, y, z } from './myModule';
