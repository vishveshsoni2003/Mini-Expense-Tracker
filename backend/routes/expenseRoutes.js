const express = require('express');
const { handleExpenseRoute, sortExpenseByDate, updateExpense, deleteExpense, expenseSummary } = require('../controllers/expenseController');

const router = express.Router();

router.post('/', handleExpenseRoute);
router.get('/', sortExpenseByDate);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);
router.get('/summary', expenseSummary);

module.exports = router;

