import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && amount !== 0 && type !== "") {
      const setTransactions = {
        id: Math.floor(Math.random() * 1000000 + 1),
        title,
        amount,
        type,
      };
      addTransaction(setTransactions);

      clearFeilds();
    }
    return;
  };
  const handleRadio = (el) => {
    setType(el.value);
  };
  const clearFeilds = () => {
    let radioEl = document.querySelector(`${"#" + type}`);
    radioEl.checked = false;
    setTitle("");
    setAmount(0);
    setType("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            id="text"
            value={title}
            placeholder="Enter Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <br />
          <label htmlFor="expense">
            <input
              type="radio"
              name="amount"
              id="expense"
              value="expense"
              onClick={(e) => handleRadio(e.target)}
            />
            Expense
          </label>
          <label htmlFor="income">
            <input
              type="radio"
              name="amount"
              id="income"
              value="income"
              onClick={(e) => handleRadio(e.target)}
            />
            Income
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};
// onChange={()=>onChange("title")}
// onChange={(e)=>handleChange("title",e)}
