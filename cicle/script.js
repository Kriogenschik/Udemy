"use strict"

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
	for (let j = 0; j < i; j++) {
		result += "*";
	}
	result += '\n';
	
}

console.log(result);

let numberOfFillms = prompt("How many films do you watching?", '');

const personalMovieDB = {
    count: numberOfFillms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
	const a = prompt("what movie do you watching last?", ''),
        b = prompt("how do you rate it?", '');
				
	if (a && b && a.length < 50) {
	personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Few movies");
} else if(30 < personalMovieDB.count >= 10){
	console.log("Ok");
} else {
	console.log("Too much");
}
console.log(personalMovieDB);