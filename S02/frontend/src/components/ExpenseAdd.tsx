import type { Expense, ExpenseInput } from "../types/Expense";
import { useForm } from "react-hook-form";

interface ExpenseAddProps {
  addExpense: (expense: Expense) => void;
}

type FormData = ExpenseInput;

export default function ExpenseAdd({ addExpense }: ExpenseAddProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const newExpense: Expense = {
      id: Date.now().toString(), // l’API devrait gérer ça, mais pour l’instant on simule
      ...data,
    };

    console.log("Form data:", newExpense);

    // étape 1 : affichage
    // étape 2 : appel API ou addExpense
    addExpense(newExpense);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Payer:
            <select {...register("payer", { required: true })}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
            </select>
          </label>
          {errors.payer && <span style={{ color: "red" }}>Required</span>}
        </div>

        <div>
          <label>
            Date:
            <input type="date" {...register("date", { required: true })} />
          </label>
          {errors.date && <span style={{ color: "red" }}>Required</span>}
        </div>

        <div>
          <label>
            Description:
            <input
              type="text"
              {...register("description", { required: true, minLength: 3 })}
            />
          </label>
          {errors.description && (
            <span style={{ color: "red" }}>Min 3 characters</span>
          )}
        </div>

        <div>
          <label>
            Amount:
            <input
              type="number"
              step="0.01"
              {...register("amount", {
                required: true,
                min: 0.01,
                valueAsNumber: true,
              })}
            />
          </label>
          {errors.amount && (
            <span style={{ color: "red" }}>Must be greater than 0</span>
          )}
        </div>

        <button type="submit">Add expense</button>
      </form>
    </div>
  );
}
