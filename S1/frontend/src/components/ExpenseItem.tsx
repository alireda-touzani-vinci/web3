import type { Expense } from "../Types/Expense";

interface props {
    expense: Expense
}

const ExpenseItem = ({expense}: props) => {
    return (
        <div>
        <strong>Expense n°{expense.id}</strong>
        <p>Date: {expense.date}</p>
        <p>Description: {expense.description}</p>
        <p>Payer: {expense.payer}</p>
        <p>Amount: {expense.amount} €</p>
        </div>
    );
}

export default ExpenseItem