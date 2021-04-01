import { useState, useEffect } from "react";
import { calcBalance, calcIncome, calcExpense } from "./utils/functions";

import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calcBalance(transactions, setTotal);
    return () => {
      calcBalance(transactions, setTotal);
    };
  }, [transactions]);

  const handleAddition = (e) => {
    e.preventDefault();
    if (title !== "" && amount !== 0 && type !== "") {
      const id = Math.floor(Math.random() * 1000000 + 1);
      setTransactions((item) => [
        ...item,
        { title, amount: Number(amount), type, id },
      ]);
      clearFeilds();

    }
    return;
  };

  const handleDelete = (id) => {
    const filteredArr = transactions.filter((item) => item.id !== id);
    setTransactions(filteredArr);
  };
  const handleRadio = (el)=>{
    setType(el.value)
  }
  const clearFeilds=()=>{
    let radioEl= document.querySelector(`${"#"+type}`);
    radioEl.checked=false;
    setTitle("");
    setAmount(0);
    setType("");
  }

  return (
    <div className="App">
      <Header />
      <div className="container">

        <div className="row">

          <div className="col-6">
            <Balance total={total} />
            <IncomeExpense
              income={calcIncome}
              expense={calcExpense}
              transactions={transactions}
            />
            <AddTransaction
              onChange={{ setTitle, setAmount, handleRadio }}
              fields={{ title, amount, type }}
              onAddItem={handleAddition}
            />
          </div>{/*end-col-6*/}


          <div className="col-6">
            <TransactionList
              transactions={transactions}
              onDelete={handleDelete}
            />
          </div>{/*end-col-6*/}
        
        </div>{/*end-row*/}

      </div>{/*end-container*/}
    </div>
  );
}

export default App;
