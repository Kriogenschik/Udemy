let numberOfFillms

function start() {
	numberOfFillms = prompt("How many films do you watching?", '');

	while (numberOfFillms == '' || numberOfFillms == null || isNaN(numberOfFillms)) {
		numberOfFillms = prompt("How many films do you watching?", '');
	}
}

start();

const personalMovieDB = {
    count: numberOfFillms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
	const a = prompt("what movie do you watching last?", ''),
        b = prompt("how do you rate it?", '');
				
	if (a && b && a.length < 50) {
	personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
}
}

// rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
	console.log("Few movies");
} else if(30 < personalMovieDB.count >= 10){
	console.log("Ok");
} else {
	console.log("Too much");
}
}

// detectPersonalLevel();

function showMyDB() {
	if (!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for (let i = 0; i < 2; i++) {
		const a = prompt(`Your favorite genre #${i + 1}?`, '');
		personalMovieDB.genres[i] = a;
	}
}

writeYourGenres();

showMyDB();
