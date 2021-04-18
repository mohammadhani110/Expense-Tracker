import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { calcIncome, calcExpense } from "../utils/functions";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const income = calcIncome(transactions);
  const expense = calcExpense(transactions);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income || "0.00"}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense || "0.00"}
        </p>
      </div>
    </div>
  );
};
