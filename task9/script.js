function fib(num) {
  if (typeof num !== "number" || num < 0) {
    return "";
  }
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i == 1) {
      arr[i - 1] = 0;
    } else if(i == 2) {
      arr[i - 1] = 1;
    } else {
      arr[i - 1] = arr[i - 2] + arr[i - 3]
    }
    
  };
  console.log(arr.join(" "));
}

fib(5);