const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0)
        .reduce((sum, item) => sum + item.amount, 0);
};

const getTotalIncomeAmount = (data) => {
    const isPositive = data.some(item => item.amount < 0);
    console.log(isPositive);
    if (isPositive) {
        return data.reduce((sum, item) => sum + item.amount, 0);
    } else {
        return getPositiveIncomeAmount(data);
    }
};

getTotalIncomeAmount(funds);
