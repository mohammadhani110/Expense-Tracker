import { Transaction } from "./Transaction";

export const TransactionList = ({ transactions, onDelete }) => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => (
          <Transaction item={item} key={item.id} onDelete={onDelete}/>
        ))}
      </ul>
    </>
  );
};
