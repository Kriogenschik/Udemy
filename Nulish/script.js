"use strict"

let userName;
let userKey;

console.log(userName ?? userKey ?? "user");

const block = document.querySelector('.block');

console.log(block);

console.log(block?.textContent);

const userData = {
	name: 'Ivan',
	age: null
}

console.log(userData.skills?.js);