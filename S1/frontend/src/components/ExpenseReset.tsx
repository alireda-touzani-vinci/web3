type ExpenseResetProps = {
    handleReset: () => void
}


const ExpenseReset = ({handleReset}: ExpenseResetProps) => {
    const reset = async() => {
        try {
            const response = await fetch("http://localhost:3000/expenses/reset", {
                method: "POST"
            });

            if (!response.ok) {
                throw new Error("Error resetting expenses");
            }

            handleReset();

        } catch (err) {
            console.error("Error resetting expenses: ", err);
        }
    }
    return <button onClick={reset}>Reset</button>
}

export default ExpenseReset;