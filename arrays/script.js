"use strict"

const arr = [1, 2, 3, 4, 5, 6];

arr.push(7);

for (let value of arr) {
	console.log(value);
}

arr.forEach((item, index, arr) => {
});

function compare(a, b) {
	return a - b; 
}

arr.sort(compare);

//filter

const names = ['Ivan', 'AnN', "KseNia", "Vladimir"];

const shortNames = names.filter((name) => {
	return name.length < 5;
});

console.log(shortNames);

//map

const result = names.map(name => name.toLowerCase());

console.log(result);

//every/some

console.log(names.some(name => name.length == 3));
console.log(names.every(name => name.length == 3));

//reduce
{
	const arr = [4, 5, 1, 3, 2, 6];

	const result = arr.reduce((sum, current) => sum + current); 

}