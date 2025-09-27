const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/expenses.json");
const initialDataPath = path.join(__dirname, "../data/expenses.init.json");

getAllExpenses = () => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading data: ", err);
    return [];
  }
};

getInitialExpenses = () => {
  try {
    const data = fs.readFileSync(initialDataPath, "utf-8");
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

resetExpenses = () => {
  try {
    const initialExpenses = getInitialExpenses();
    fs.writeFileSync(dataFilePath, JSON.stringify(initialExpenses, null, 2));
    return initialExpenses;
  } catch (err) {
    console.error("Error writing: ", err);
    return null;
  }
};

module.exports = { getAllExpenses, addExpense, resetExpenses };
