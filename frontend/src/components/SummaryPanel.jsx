import React from 'react'

const SummaryPanel = ({ summary }) => {
  if (!summary) return <p>Loading...</p>;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <h2 className="text-4xl font-bold text-center">Summary</h2>
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500">Total Spent</h3>
        <p className="text-2xl font-bold">
          ₹{summary.totalSpent}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500">Highest Expense</h3>
        <p className="text-2xl font-bold">
          ₹{summary.highestExpense.amount}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500">Top Category</h3>
        <p className="text-2xl font-bold">
          {Object.keys(summary.categoryTotals)[0]}
        </p>
      </div>
      </div>
    </div>
  );
};

export default SummaryPanel;