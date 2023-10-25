const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
    let totalSquare = 0;
    data.shops.forEach((shop) => {
      totalSquare += shop.width * shop.length;
    });
    const totalVolume = totalSquare * data.height;
    const totalPrice = totalVolume * data.moneyPer1m3;
    if (totalPrice <= data.budget) {
      return "Бюджета достаточно";
    } return "Бюджета недостаточно"
}

isBudgetEnough(shoppingMallData);