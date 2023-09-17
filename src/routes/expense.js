const {Router} = require('express');
const expenseCltr = require('../controllers/expense-cltr');
const router = Router();

router.get('/', expenseCltr.getAllExpense);
router.post('/', expenseCltr.postExpense);
router.get('/:id', expenseCltr.getById);

module.exports = router;
