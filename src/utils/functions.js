export const calcIncome = (transactions) => {
  let sum = 0;
  const incomeArr = transactions.filter((item) => item.type === "income");
  incomeArr.forEach((item) => (sum += item.amount));
  return sum;
};

export const calcExpense = (transactions) => {
  let sub = 0;
  const expenseArr = transactions.filter((item) => item.type === "expense");
  expenseArr.forEach((item) => (sub += item.amount));
  return sub;
};

export const calcBalance = (transactions) => {
  if (transactions.length !== 0) {
    const allTotal = calcIncome(transactions) - calcExpense(transactions);
    return allTotal;
  }
};
