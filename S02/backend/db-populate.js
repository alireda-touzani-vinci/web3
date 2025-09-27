const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

async function main() {
  console.log("➡️ Lecture du fichier data/expenses.json...");

  const filePath = path.join(__dirname, "data", "expenses.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  const expenses = JSON.parse(rawData);

  console.log(`➡️ ${expenses.length} enregistrements trouvés.`);

  // (Optionnel) vider la table avant pour éviter les doublons
  // await prisma.expense.deleteMany();

  for (const expense of expenses) {
    await prisma.expense.create({
      data: {
        description: expense.description,
        payer: expense.payer,
        amount: expense.amount,
        date: expense.date ? new Date(expense.date) : undefined,
      },
    });
  }

  console.log("✅ Données insérées avec succès !");
}

main()
  .catch((e) => {
    console.error("❌ Erreur:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
