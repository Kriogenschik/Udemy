"use strict"

const arr = [1, 2, 3, 4, 5, 6];

arr.push(7);

for (let value of arr) {
	console.log(value);
}

arr.forEach((item, index, arr) => {
console.log(`${index}: ${item} from ${arr}`);
});

function compare(a, b) {
	return a - b; 
}

arr.sort(compare);

