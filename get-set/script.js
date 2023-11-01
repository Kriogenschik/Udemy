"use strict"

const persone = {
	name: "Alex",
	age: 25,

	get userAge() {
		return this.age;
	},

	set userAge(num) {
		this.age = num;
	}
}

// console.log(persone.userAge);

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	#surname = 'SomeSurname';

	say() {
		console.log(`User Name: ${this.name}, age: ${this._age}`);
	}

	get age() {
		return this._age
	}

	set age(age) {
		if (typeof age == "number" && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log("Wrong data");
		}
	}

	get surname() {
		return this.#surname;
	}

	set surname(surname) {
		this.#surname = surname;
	} 
}

const ivan = new User("Ivan", 30);

console.log(ivan.age);
ivan.surname = 'NewSurname';
console.log(ivan.surname);