import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = function (props) {
  const [editing, setEditing] = useState("");
  const saveExpenseDataHandler = function (enteredExpenseData, cancel) {
    if (cancel === false) {
      setEditing("");
      return;
    }
    const expenseData = {
      ...enteredExpenseData,
      id: Math.trunc(Math.random() * 200) + enteredExpenseData.title,
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const editButton = () => {
    setEditing("true");
  };
  return (
    <div className="new-expense">
      {editing === "" && <button onClick={editButton}>New Expense</button>}
      {editing !== "" && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
