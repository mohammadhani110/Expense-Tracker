import React from "react";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Balance />
            <IncomeExpense />

            <AddTransaction />
          </div>
          {/*end-col-6*/}

          <div className="col-6">
            <TransactionList />
          </div>
          {/*end-col-6*/}
        </div>
        {/*end-row*/}
      </div>
      {/*end-container*/}
    </GlobalProvider>
  );
}

export default App;
