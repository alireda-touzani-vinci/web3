import type { Identifiable } from './Core';

// Données envoyées au serveur
export interface ExpenseInput {
  date: string;
  description: string;
  payer: 'Alice' | 'Bob';
  amount: number;
}

// Données reçues du serveur
export interface Expense extends Identifiable, ExpenseInput {}