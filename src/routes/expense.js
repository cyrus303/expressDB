const {Router} = require('express');
const expenseCltr = require('../controllers/expense-cltr');
const router = Router();

const {checkSchema} = require('express-validator');
const expenseValidationSchema = require('../helpers/expenseValidationSchema');

router.get('/', expenseCltr.getAllExpense);

router.post(
  '/',
  checkSchema(expenseValidationSchema),
  expenseCltr.postExpense
);

router.get('/:id', expenseCltr.getById);

module.exports = router;
