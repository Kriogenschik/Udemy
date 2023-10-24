"use strict"

const num = 50;

if (num < 49) {
	console.log("Error");
} else if (num > 100) {
	console.log("Too many");
} else  {
	console.log("Ok");
}

(num == 50) ? console.log("OK") : console.log("Error");

switch (num) {
	case 49:	
				console.log("Wrong");
				break;
	case 100: 
				console.log("Wrong");
				break;
	case 50: 
				console.log("Right");
				break;
	default:
				console.log("Wrong");
				break;
};

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "dfdsfdsfdfsdf");

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport ||  mariaReport);



console.log( NaN || 2 || undefined ); // 2


console.log( NaN && 2 && undefined );// Nan


console.log( 1 && 2 && 3 ); //3


console.log( !1 && 2 || !3 ); //false


console.log( 25 || null && !3 ); // 25


console.log( NaN || null || !3 || undefined || 5); // 5


console.log( NaN || null && !3 && undefined || 5); // 5


console.log( 5 === 5 && 3 > 1 || 5); // true

{
	const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
} //Done!
}

{
	let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
} // Done!

}

{
	let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} // ------

}