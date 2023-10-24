function sayHello(name) {
  return "Привет, " + name;
}

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

function getMathResult(num, arg) {
  let result = num;
  if (typeof arg == "number") {
    for (let i = 2; i <= arg; i++) {
      result += "---" + num * i;
    }
  }
  return result;
}

getMathResult(5, 4);
