"use strict";

function animation() {
  const box = document.querySelector(".box");
  let pos = 0;

  const run = setInterval(frame, 10);
  let isDown = false;
  function frame() {
    if (pos == 300) isDown = true;
    if (pos == 0) isDown = false;
    if (isDown) {
      pos--;
      box.style.top = pos + "px";
      box.style.left = pos + "px";
    } else {
      pos++;
      box.style.top = pos + "px";
      box.style.left = pos + "px";
    }
  }
}

const box2 = document.querySelector(".box2");
let pos = 0;
let isDown = false;

function myAnimation() {
  if (pos == 300) isDown = true;
  if (pos == 0) isDown = false;
  isDown ? pos-- : pos++;

  box2.style.top = pos + "px";
  box2.style.right = pos + "px";

  requestAnimationFrame(myAnimation);
}

animation();
requestAnimationFrame(myAnimation);
