import React from 'react'
import { useState, useEffect } from 'react';

const ExpenseForm = ({ onSubmitExpense, editingExpense }) => {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (Number(formData.amount) <= 0) {
        alert("Amount must be greater than 0");
        return;
    }

    const today = new Date();
    const selectedDate = new Date(formData.date);

    if (selectedDate > today) {
        alert("Future dates are not allowed");
        return;
    }

    await onSubmitExpense(formData);

    setFormData({
      amount: "",
      category: "",
      date: "",
      note: "",
    });
  };
  useEffect(() => {
    if(editingExpense){
        setFormData({
            amount: editingExpense.amount,
            category: editingExpense.category,
            date: editingExpense.date.split("T")[0],
            note: editingExpense.note
        });
    }
}, [editingExpense]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <div>
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          min="1"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Note</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
        />
      </div>

      <button type="submit">
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};
export default ExpenseForm; 