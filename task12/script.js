const someString = 'This is some strange string';

function reverse(str) {
  if (typeof(str) !== "string") return "Ошибка!"
 const arr = [];
 for (let i = str.length; i > 0; i--) {
  arr[str.length - i] = str[i - 1];
 }
 console.log(arr.join(""));
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  if (arr.length) {
    str = `Доступные валюты:\n`;
  } else {
    str = "Нет доступных валют";
  };

  for (let curr of arr) {
    if(curr !== missingCurr) {
      str += `${curr}\n`
    }
  }

  console.log(str);
}

availableCurr([...baseCurrencies, ...additionalCurrencies], "RUB");