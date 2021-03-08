
export const AddTransaction = ({onChange:{setTitle,setAmount,setType},onAddItem}) => {
  
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onAddItem}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount 
          </label>
          <br/>
          <label htmlFor="expense">
            <input type="radio" name="amount" id="expense" value="expense" onClick={(e)=>setType(e.target.value)}/>
            Expense
          </label>
          <label htmlFor="income">
            <input type="radio" name="amount" id="income" value="income" onClick={(e)=>setType(e.target.value)}/>
            Income
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </>
  );
};
// onChange={()=>onChange("title")}
// onChange={(e)=>handleChange("title",e)}