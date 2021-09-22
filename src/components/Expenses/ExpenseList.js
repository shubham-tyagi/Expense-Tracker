import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpenseList = (props) => {
  if (props.filteredExpense.length == 0) return <h2>No Expense Found</h2>;
  else
    return filteredExpense.map((expense) => (
      <Card className="expenses">
        <li>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </li>
      </Card>
    ));
};

export default ExpenseList;
