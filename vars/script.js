let number = 5;

const borderWidth = 100;

var x =  35;

console.log(borderWidth);

let userName = "John";
let userNumber = 25;

userNumber = 24;


function solution(number){
  if (number < 0) return 0;
  let result = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }
  return result
}

console.log(solution(10));