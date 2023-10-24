let incr = 10,
		decr = 10;

++incr;
--decr;

incr++;
decr--;

console.log(++incr);
console.log(--decr);

console.log(incr++);
console.log(decr--);

const isChecked = true,
			isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose); 