const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) { 
  for (let k = lines - i; k > 0; k--) {
    result += " ";
  }
  for (let j = 0; j < (2 * i + 1); j++) {
    result += "*";
  }
  result += '\n';
}

console.log(result);