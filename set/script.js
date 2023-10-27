"use strict";

const arr = [1, 1, 2, 3, 3, 4, 6, 7, 7, 9];

const set = new Set(arr);

set.add(12);
set.add(7);

set.delete(3);
set.has(5);
// set.clear();
set.size;

console.log(set);

for (let value of set) console.log(value);

set.forEach((value, valueAgain, set) => {
	console.log(value, valueAgain);
})

function unique(arr) {
	return Array.from(new Set(arr));
}