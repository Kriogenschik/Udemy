function getTimeFromMinutes(min) {
  if (typeof min !== "number" || min < 0 || !Number.isInteger(min)) {
    return "Ошибка, проверьте данные";
  }

  const hour = Math.floor(min / 60);
  const minutes = min % 60;

  let result = "";

  if (hour == 0 || hour > 4) {
    result = `${hour} часов и ${minutes} минут`;
  } else if (hour == 1) {
    result = `${hour} час и ${minutes} минут`;
  } else {
    result = `${hour} часа и ${minutes} минут`;
  }
  console.log(result);
}

function findMaxNumber(num1, num2, num3, num4) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    console.log(0);
  } else {
    console.log(Math.max(num1, num2, num3, num4));
  }
}
