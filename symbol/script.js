"use strict"

const obj = {
	'name': "Test"
}

let id = Symbol("id");
obj[id] = 1;

console.log(obj[id]);

const obj2 = {
	'name': "Test",
	[Symbol('id')]: 1
}

console.log(Object.getOwnPropertySymbols(obj2));
