"use strict"


function User(name, id) {
	this.name = name,
	this.id = id,
	this.human = true,
	this.hello = function() {
		console.log(`Hello ${this.name}`);
	}
}

User.prototype.exit = function() {
	console.log(`user ${this.name} is gone`);
}

const ivan = new User('Ivan', 28);