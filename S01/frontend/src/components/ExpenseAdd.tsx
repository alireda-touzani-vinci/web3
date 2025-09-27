import type { Expense } from "../Types/Expense";

type ExpenseAddProps = {
  handleAdd: (expense: Expense) => void;
};

const ExpenseAdd = ({handleAdd}: ExpenseAddProps) => {
  
  const onAdd = async () => {
    const expense: Expense = {
      id: Date.now().toString(),
      payer: Math.random() < 0.5 ? "Alice" : "Bob",
      amount: parseFloat((Math.random() * 100).toFixed(2)),
      description: Math.random() < 0.5 ? "Pomme" : "Chocolat",
      date: Date.now().toString(),
    };

    try {
      const response = await fetch("http://localhost:3000/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense)
      });

      if(!response.ok) {
        throw new Error("Error adding expense"); 
      }

      const savedExpense = await response.json();
      handleAdd(savedExpense);
    } catch (err) {
      console.error("Error fetching add : ", err);
    }
  };

  return <button onClick={onAdd}>Add</button>;
};

export default ExpenseAdd;
