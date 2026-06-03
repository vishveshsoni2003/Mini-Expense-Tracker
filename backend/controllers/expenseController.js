const Expense = require('../models/Expense')

const handleExpenseRoute = async (req, res) => {
    const { amount, category, date, note } = req.body;

    try {
        const expense = await Expense.create({
            amount,
            category,
            date,
            note
        })

        return res.status(201).json({
            message: "Expense added successfully",
            expense
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const sortExpenseByDate = async (req, res) => {
    try {
        const expenses = await Expense.find({}).sort({ date: -1 });
        return res.status(200).json({
            expenses
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const deleteExpense = async (req, res) => {
    try {
        const id = req.params.id;
        await Expense.findByIdAndDelete(id);
        return res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
const updateExpense = async (req, res) => {
    try {
        const id = req.params.id;
        await Expense.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ message: "Expense updated successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
const expenseSummary = async (req, res) => {
    try {
        const expense = await Expense.find({});

        const totalSpent = expense.reduce(
            (sum, item) => sum + item.amount,
            0
        );

        const highestExpense =
            expense.length > 0
                ? expense.reduce((highest, expense) =>
                    expense.amount > highest.amount ? expense : highest
                )
                : null;

        const categoryTotals = {};

        expense.forEach((item) => {
            if (!categoryTotals[item.category]) {
                categoryTotals[item.category] = 0;
            }

            categoryTotals[item.category] += item.amount;
        });

        return res.status(200).json({
            totalSpent,
            highestExpense,
            categoryTotals,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
module.exports = { handleExpenseRoute, sortExpenseByDate, deleteExpense, updateExpense, expenseSummary };