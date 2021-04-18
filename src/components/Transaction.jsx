import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const sign = transaction.type === "expense" ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <li className={transaction.type === "expense" ? "minus" : "plus"}>
        {transaction.title}{" "}
        <span>
          {sign}${transaction.amount}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </>
  );
};
