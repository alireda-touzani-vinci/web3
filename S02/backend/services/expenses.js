const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function getAllExpenses() {
  return await prisma.expense.findMany();
}

async function addExpense(expense) {
  return await prisma.expense.create({
    data: {
      description: expense.description,
      payer: expense.payer,
      amount: expense.amount,
      date: expense.date ? new Date(expense.date) : undefined
    }
  })
}

async function resetExpenses() {
  await prisma.expense.deleteMany();

  // recharge depuis expenses.init.json
  const fs = require('fs');
  const path = require('path');
  const initFile = path.join(__dirname, '../data/expenses.init.json');
  const initData = JSON.parse(fs.readFileSync(initFile, 'utf8'));
  // insère chaque dépense
  for (const expense of initData) {
    await prisma.expense.create({
      data: {
        description: expense.description,
        payer: expense.payer,
        amount: expense.amount,
        date: expense.date ? new Date(expense.date) : undefined,
      },
    });
  }
  
  return prisma.expense.findMany();
}

module.exports = {
  getAllExpenses,
  addExpense,
  resetExpenses,
};
