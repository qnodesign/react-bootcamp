//tagged template literals

const a = `test: ${b}, test: ${c}`;

const highlight = (strings, ...values) => {
	// here i is the iterator for the strings array
	return strings.reduce((result, string, i) => {
		return `${result}${string} <cite>${values[i] || ''}</cite>`;
	}, '');
};

const author = 'Thomas A. Edison';
const statement = `I have not failed. I've just found 10,000 ways that won't work.`;
const quote = highlight`${statement} by ${author}`;
console.log(quote);
