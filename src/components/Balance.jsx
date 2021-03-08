import React from "react";

export const Balance = ({total}) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total?total:"0.00"}</h1>
    </>
  );
};
