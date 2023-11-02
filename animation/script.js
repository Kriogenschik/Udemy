"use strict";

const boxBtn = document.querySelector(".btn1"),
  circleBtn = document.querySelector(".btn2"),
  figures = document.querySelectorAll(".figure");

let boxAnimation;

boxBtn.addEventListener("click", () => {
  if (!boxAnimation) {
    boxAnimation = figures[0].animate(
      [
        { transform: "translateY(0) rotate(0deg)", filter: "opacity(100%)" },
        {
          transform: "translateY(100px) rotate(180deg)",
          filter: "opacity(50%)",
        },
        { transform: "translateY(-100px) rotate(270deg)" },
        { transform: "translateY(0) rotate(3600deg)", filter: "opacity(100%)" },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
  } else if (boxAnimation.playState == "paused") {
    boxAnimation.play();
  } else {
    boxAnimation.pause();
  }
});
