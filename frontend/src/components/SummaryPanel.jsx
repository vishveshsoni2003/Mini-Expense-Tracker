import React from 'react'

const SummaryPanel = ({ summary }) => {
    if (!summary) return <p>Loading...</p>;

    return (
        <>
            <h2>Summary</h2>

            <p>Total Spent: ₹{summary.totalSpent}</p>

            <p>
                Highest Expense:
                ₹{summary.highestExpense.amount}
            </p>

            <p>
                Highest Category:
                {summary.highestExpense.category}
            </p>
        </>
    );
};

export default SummaryPanel;