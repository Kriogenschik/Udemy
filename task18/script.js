function isPangram(string) {
  let set = new Set();
  let newStr = string.split(' ').join('').toLowerCase();
  for (let char of newStr) {
    set.add(char);
  }
  if (set.size == 26) {
    return true;
  } else return false;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));