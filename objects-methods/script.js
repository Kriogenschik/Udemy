"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
		start: () => {
			personalMovieDB.count = prompt("How many films do you watching?", '');
			while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
				personalMovieDB.count = prompt("How many films do you watching?", '');
			}
		},
		rememberMyFilms: () => {
			for (let i = 0; i < 2; i++) {
				const a = prompt("what movie do you watching last?", ''),
							b = prompt("how do you rate it?", '');
				if (a && b && a.length < 50) {
					personalMovieDB.movies[a] = b;
				} else {
					i--;
				}
			}
		},
		detectPersonalLevel: () => {
			if (personalMovieDB.count < 10) {
				console.log("Few movies");
			} else if(30 < personalMovieDB.count >= 10){
				console.log("Ok");
			} else {
				console.log("Too much");
			}
		},
		showMyDB: () => {
			if (!personalMovieDB.privat) {
				console.log(personalMovieDB);
			}
		},
		writeYourGenres: () => {
			for (let i = 0; i < 2; i++) {
				const a = prompt(`Your favorite genre #${i + 1}?`, '');
				if (a) {
					personalMovieDB.genres[i] = a;
				} else {
					i--;
				}
			};
			personalMovieDB.genres.forEach((genre, index) => {
				console.log(`Favorite genre #${index + 1} is ${genre}`);
			})
		},
		toggleVisibleMyDB: () => {
			personalMovieDB.privat = !personalMovieDB.privat;
		}
}


personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();
