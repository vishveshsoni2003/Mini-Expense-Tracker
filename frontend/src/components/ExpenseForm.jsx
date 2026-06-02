import React from 'react'
import { useState } from 'react';

const ExpenseForm = ({ onSubmitExpense }) => {
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

    await onSubmitExpense(formData);

    setFormData({
      amount: "",
      category: "",
      date: "",
      note: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <div>
        <label>Amount</label>
        <input
          type="number"
          name="amount"
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

      <button type="submit">Add Expense</button>
    </form>
  );
};
export default ExpenseForm; 