import { useEffect, useState } from "react";
import ExpenseItem from "../components/ExpenseItem";
import type { Expense } from "../Types/Expense";
import ExpenseAdd from "../components/ExpenseAdd";

/*const itemsDefault: Expense[] = [
  {
    id: "1",
    date: "25-12-2020",
    description: "Billet de train",
    payer: "Ali-Reda",
    amount: 7,
  },
  {
    id: "2",
    date: "25-12-2020",
    description: "Billet de train",
    payer: "Ali-Reda",
    amount: 7,
  },
  {
    id: "3",
    date: "25-12-2020",
    description: "Billet de train",
    payer: "Ali-Reda",
    amount: 7,
  },
];
*/

const Home = () => {
  const [items, setItems] = useState<Expense[]>([]);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const response = await fetch("http://localhost:3000/expenses");
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Fetch error: ", err);
      }
    }

    fetchExpenses();
  }, []);

  const handleAdd = (expense: Expense) => {
    setItems([...items, expense]);
  };

  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <>
            <ExpenseItem key={item.id} expense={item} />
            <br />
          </>
        ))
      ) : (
        <p>No Expenses yet</p>
      )}

      <ExpenseAdd handleAdd={handleAdd} />
    </div>
  );
};

export default Home;
