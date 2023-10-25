"use strict"

let obj = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		bg: "#FFF",
		text: "#242424",
	}
}

for (let key in obj) {
	if (typeof(obj[key]) == 'object') {
		for (let i in obj[key]) {
		console.log(`Property ${i} equal ${obj[key][i]}`);
		}
	} else {
			console.log(`Property ${key} equal ${obj[key]}`);
	}
}
