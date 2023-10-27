
let total = 0;
function deepCount(a){
  for (let item of a) {
    total++;
    if (Array.isArray(item)) {
      deepCount(item);
    }
  }
  return total;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));