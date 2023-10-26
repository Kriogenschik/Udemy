"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

// adv remove
const advWrapper = document.querySelector(".promo__adv");
const advs = advWrapper.querySelectorAll("img");
advs.forEach((adv) => {
  adv.remove();
});

//genre change

let promoGenre = document.querySelector(".promo__genre");
promoGenre.textContent = "драма";

//bg change

let promoBg = document.querySelector(".promo__bg");
promoBg.style.background = "url('./img/bg.jpg') center top/cover no-repeat";

//movies list

let moviesList = document.querySelector(".promo__interactive-list");

function moviesUpdate() {
  const newList = movieDB.movies;
  newList.sort();
  moviesList.innerHTML = "";
  for (let i = 0; i < newList.length; i++) {
    moviesList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${newList[i]}
            <div class="delete"></div>
        </li>`;
  }
}

moviesUpdate();

// part 2
//add movie

const addForm = document.querySelector(".add");
const addBtn = addForm.querySelector("button");
const addInput = addForm.querySelector(".adding__input");
const checkbox = addForm.querySelector('[type="checkbox"]');

addBtn.addEventListener("click", (e) => {
  const nameMaxLength = 21;
  e.preventDefault();
  let newMovie = addInput.value;
  if (newMovie.length > nameMaxLength) {
    newMovie = newMovie.slice(0, nameMaxLength) + "...";
  }
  if (newMovie) {
    movieDB.movies[movieDB.movies.length] = newMovie;
    addInput.value = "";
    if (checkbox.checked) {
      console.log("Its your favorite movie!");
    }
  }
  moviesUpdate();
});

//remove movie
document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const movieNumber = parseInt(e.target.parentElement.innerText) - 1;
    console.log(movieNumber);
    movieDB.movies.splice(movieNumber, 1);
    moviesUpdate();
  }
});
