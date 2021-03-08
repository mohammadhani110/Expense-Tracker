import React from "react";

export const Transaction = ({ item,onDelete }) => {
  return (
    <>
      <li className={item.type==="expense"?"minus":"plus"}>
        {item.title} <span>${item.amount}</span>
        <button className="delete-btn" onClick={()=>onDelete(item.id)}>x</button>
      </li>
    </>
  );
};

Transaction.defaultProps={
  item:{}
}

