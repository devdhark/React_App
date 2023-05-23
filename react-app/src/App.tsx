import { useState } from "react";
import Form from "./components/Form/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "expense1",
      amount: 10,
      category: "category1",
    },
    {
      id: 2,
      description: "expense2",
      amount: 45,
      category: "category2",
    },
    {
      id: 3,
      description: "expense3",
      amount: 67,
      category: "category1",
    },
    {
      id: 4,
      description: "expense4",
      amount: 23,
      category: "category2",
    },
  ]);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => onDelete(id)}
      ></ExpenseList>
    </div>
  );
}

export default App;
