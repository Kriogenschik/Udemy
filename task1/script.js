let numberOfFillms = prompt("How many films do you watching?", '');

const personalMovieDB = {
    count: numberOfFillms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt("what movie do you watching last?", ''),
        b = prompt("how do you rate it?", ''),
        c = prompt("what movie do you watching last?", ''),
        d = prompt("how do you rate it?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);