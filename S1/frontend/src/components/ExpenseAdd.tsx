import type { Expense } from "../Types/Expense";

type ExpenseAddProps = {
  handleAdd: (expense: Expense) => void;
};

const ExpenseAdd = ({handleAdd}: ExpenseAddProps) => {
  
  const onAdd = () => {
    const expense: Expense = {
      id: Date.now().toString(),
      payer: Math.random() < 0.5 ? "Alice" : "Bob",
      amount: parseFloat((Math.random() * 100).toFixed(2)),
      description: Math.random() < 0.5 ? "Pomme" : "Chocolat",
      date: Date.now().toString(),
    };

    handleAdd(expense);
  };

  return <button onClick={onAdd}>Add</button>;
};

export default ExpenseAdd;
