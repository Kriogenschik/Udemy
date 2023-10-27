"use strict"

const btns = document.querySelectorAll(".btn"),
			wrapper = document.querySelector(".wrapper");

btns[0].addEventListener('click', () => {
	btns[1].classList.toggle("red")
})

wrapper.addEventListener('click', (e) => {
	if (e.target && e.target.classList.contains("btn")) {
		console.log(1);
	}
})

const btn = document.createElement('button');
btn.classList.add('btn');
wrapper.append(btn);