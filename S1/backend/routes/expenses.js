var express = require("express");
var router = express.Router();
const { getAllExpenses, addExpense } = require("../services/expenses");

router.get("/", (req, res) => {
  const expenses = getAllExpenses();
  res.json(expenses);
});

router.post("/", (req, res) => {
  const newExpense = req.body;
  const savedExpense = addExpense(newExpense);

  if (savedExpense) {
    res.status(201).json(savedExpense);
  } else {
    res.status(500).json({ error: "Impossible to add the expense" });
  }
});

module.exports = router;
