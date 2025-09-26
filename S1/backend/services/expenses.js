const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/expenses.json");

getAllExpenses = () => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading data: ", err);
    return [];
  }
};

addExpense = (expense) => {
  try {
    const expenses = getAllExpenses();
    expenses.push(expense);
    fs.writeFileSync(dataFilePath, JSON.stringify(expenses, null, 2));
    return expense;
  } catch (err) {
    console.error("Error writing : ", err);
  }
};

module.exports = { getAllExpenses, addExpense };
