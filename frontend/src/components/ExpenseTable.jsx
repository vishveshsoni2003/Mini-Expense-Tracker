import React from 'react'

const ExpenseTable = ({ expenses, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100 p-3 text-left">
          <tr className="p-3 border-b">
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
            <tr className="p-3 border-b" key={expense._id}>
              <td>
                {new Date(expense.date).toLocaleDateString("en-IN")}
              </td>
              <td>{expense.category}</td>
              <td>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(expense.amount)}
              </td>
              <td>{expense.note}</td>
              <td>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => onDelete(expense._id)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  onClick={() => onEdit(expense)}
                >
                  Edit
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseTable