import React from 'react'

const ExpenseTable = ({expenses}) => {
  return (
    <>
    <table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Category</th>
      <th>Amount</th>
      <th>Note</th>
    </tr>
  </thead>

  <tbody>
    {expenses.map((expense) => (
      <tr key={expense._id}>
        <td>{expense.date}</td>
        <td>{expense.category}</td>
        <td>{expense.amount}</td>
        <td>{expense.note}</td>
        
      </tr>
    ))}
  </tbody>
</table>
    </>
  )
}

export default ExpenseTable