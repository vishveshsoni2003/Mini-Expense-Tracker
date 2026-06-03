import React, { useEffect, useState } from 'react';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseForm from '../components/ExpenseForm';
import SummaryPanel from '../components/SummaryPanel';
import ExpenseChart from "../components/ExpenseChart";
import FilterPanel from '../components/FilterPanel';
import { getExpenses, createExpense, deleteExpense, getSummary, updateExpense } from '../services/expenseApi';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const [summary, setSummary] = useState(null);
    const [editingExpense, setEditingExpense] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
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
            if (editingExpense) {
                await updateExpense(
                    editingExpense._id,
                    expenseData
                );
                setEditingExpense(null);
            } else {
                await createExpense(expenseData);
            }
            await fetchExpenses();
            await fetchSummary();
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeleteExpense = async (id) => {
        try {
            await deleteExpense(id);
            await fetchExpenses();
            await fetchSummary();
        } catch (error) {
            console.log(error);
        }
    };
    const fetchSummary = async () => {
        try {
            const data = await getSummary();
            setSummary(data);
        } catch (error) {
            console.log(error);
        }
    };
    const filteredExpenses = expenses.filter((expense) => {
        const expenseDate = new Date(expense.date);

        const categoryMatch =
            !categoryFilter ||
            expense.category === categoryFilter;

        const startMatch =
            !startDate ||
            expenseDate >= new Date(startDate);

        const endMatch =
            !endDate ||
            expenseDate <= new Date(endDate);

        return categoryMatch && startMatch && endMatch;
    });
    useEffect(() => {
        fetchExpenses();
        fetchSummary();
    }, [])
    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6 min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center">Expense Tracker</h1>
            <SummaryPanel summary={summary} />
            <div className="bg-white rounded-xl shadow-md p-5">
                <ExpenseChart summary={summary} />
            </div>
            <ExpenseForm onSubmitExpense={handleAddExpense} editingExpense={editingExpense}
            />
            <FilterPanel
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
            <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} onEdit={setEditingExpense} />
        </div>
    )
}

export default Dashboard