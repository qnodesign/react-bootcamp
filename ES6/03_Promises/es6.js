// async promise

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
