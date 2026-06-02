import React, { useEffect, useState } from 'react';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseForm from '../components/ExpenseForm';
import { getExpenses, createExpense, deleteExpense } from '../services/expenseApi';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const fetchExpenses = async () => {
        try {
            const data = await getExpenses();
            console.log(data);

            setExpenses(data.expenses);

        } catch (error) {
            console.log(error);

        }
    };
    const handleAddExpense = async (expenseData) => {
        try {
            await createExpense(expenseData);
            await fetchExpenses();
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeleteExpense = async (id) => {
    try {
        await deleteExpense(id);
        await fetchExpenses();
    } catch (error) {
        console.log(error);
    }
};
    useEffect(() => {
        fetchExpenses();
    }, [])
    return (
        <>
            <ExpenseForm onSubmitExpense={handleAddExpense} />
            <ExpenseTable expenses={expenses} />
            <ExpenseTable expenses={expenses} onDelete={handleDeleteExpense}
            />
        </>
    )
}

export default Dashboard