function calculateVolumeAndArea(num) {
 if(typeof(num) == "number" && num > 0) {
  const vol = num * num * num;
  const square = num * num * 6;
  console.log(`Volume of cube: ${vol}, square of cube: ${square}`);
 } else console.log("Wrong argument");
}

calculateVolumeAndArea(15);

function getCoupeNumber(num) {
  if(typeof(num) == "number" && num >= 0 && Number.isInteger(num)) {
    if (0 < num && num < 36) {
      const coupe = Math.ceil(num / 4);
      console.log(coupe);
    } else {
      console.log("Таких мест в вагоне не существует");
    }
  } else console.log("Ошибка. Проверьте правильность введенного номера места");
} 

getCoupeNumber(33);