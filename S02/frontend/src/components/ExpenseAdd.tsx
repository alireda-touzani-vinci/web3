import { useState } from "react";
import type { Expense } from "../types/Expense";

interface ExpenseAddProps {
  addExpense: (expense: Expense) => void;
}

export default function ExpenseAdd({ addExpense }: ExpenseAddProps) {
  const [payer, setPayer] = useState("Alice");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense: Expense = {
      id: Date.now().toString(),
      date,
      description,
      payer,
      amount: parseFloat(amount),
    };

    console.log("Form data:", newExpense);

    addExpense(newExpense);

    setDate("");
    setDescription("");
    setAmount("");
    setPayer("Alice");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Payer:
            <select value={payer} onChange={(e) => setPayer(e.target.value)}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Amount:
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Add expense</button>
      </form>
    </div>
  );
}
