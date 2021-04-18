import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// INITIAL STATE
const initialState = {
  transactions: [],
};

// CREATE CONTEXT
export const GlobalContext = createContext(initialState);

// GLOBAL PROVIDER
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTIONS
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: { id: id },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
