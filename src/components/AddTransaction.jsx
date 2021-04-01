
export const AddTransaction = ({onChange:{setTitle,setAmount,setType,handleRadio},fields:{ title, amount, type },onAddItem}) => {
  
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onAddItem}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input type="text" id="text" value={title} placeholder="Enter Title..." onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount 
          </label>
          <br/>
          <label htmlFor="expense">
            <input type="radio" name="amount" id="expense" value="expense" onClick={(e)=>handleRadio(e.target)}/>
            Expense
          </label>
          <label htmlFor="income">
            <input type="radio" name="amount" id="income" value="income" onClick={(e)=>handleRadio(e.target)}/>
            Income
          </label>
          <input type="number" id="amount" value={amount} placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </>
  );
};
// onChange={()=>onChange("title")}
// onChange={(e)=>handleChange("title",e)}