import React from "react";

export const IncomeExpense = ({ income, expense,transactions }) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income(transactions) || "0.00"}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense(transactions) || "0.00"}
        </p>
      </div>
    </div>
  );
};
