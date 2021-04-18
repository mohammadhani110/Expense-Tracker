import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { calcBalance } from "../utils/functions";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  const total = calcBalance(transactions);
  console.log(total);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total ? total : "0.00"}</h1>
    </>
  );
};
