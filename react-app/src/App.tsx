import { useState } from "react";
import Form from "./components/Form/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

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
      category: "Entertainment",
    },
    {
      id: 3,
      description: "expense3",
      amount: 67,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "expense4",
      amount: 23,
      category: "Groceries",
    },
  ]);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => onDelete(id)}
      ></ExpenseList>
    </div>
  );
}

export default App;
