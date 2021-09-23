import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p> No Expenses found. </p>;

  // const myFunction = function (expense) {
  //   return (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   );
  // };

  // if (filteredExpense.length > 0)
  //   expensesContent = filteredExpense.map(myFunction);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {expensesContent} */}
      <ExpensesChart items={filteredExpense} />
      <ExpenseList expenses={filteredExpense} />
    </Card>
  );
}
export default Expenses;
