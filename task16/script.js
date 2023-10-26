function factorial(num) {
    if (typeof num !== "number" || !Number.isInteger(num)) {
      return "Wrong Argument"
    } else if (num < 1) {
      return 1;
    } else {
      if (num == 1) {
        return num;
      } else {
        return num * factorial(num - 1)
      }
    }
}

console.log(factorial(10));