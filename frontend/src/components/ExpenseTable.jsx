import React from 'react'

const ExpenseTable = ({ expenses, onDelete, onEdit }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Note</th>
            <th>Delete Expense</th>
            <th>Edit Expense</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(expense.amount)}
              </td>
              <td>{expense.note}</td>
              <td>
                <button onClick={() => onDelete(expense._id)}>
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => onEdit(expense)}
                >
                  Edit
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ExpenseTable