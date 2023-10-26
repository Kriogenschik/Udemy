let x = 5;
console.log(x++); //5

[] + false - null + true // Nan

{
let y = 1;
let x = y = 2;
console.log(x); //2
}

[] + 1 + 2 //12

console.log("1"[0]); //1

2 && 1 && null && 0 && undefined // null

!!( a && b ) (a && b) // diferent

console.log(null || 2 && 3 || 4); //3

a = [1, 2, 3];
b = [1, 2, 3]; // a !== b

console.log(+"Infinity"); // Infinity

"Ёжик" > "яблоко" // false

0 || "" || 2 || undefined || true || false // 2