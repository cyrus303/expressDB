const {Router} = require('express');
const {Expense} = require('../database/index');
const router = Router();

router.get('/', async (request, response) => {
  try {
    const expenseDB = await Expense.find();
    response.send(expenseDB);
  } catch (err) {
    console.log(err);
    response.sendStatus(400).send(err);
  }
});

router.post('/', async (request, response) => {
  const {body} = request;
  try {
    const expenseObj = await Expense.create(body);
    response.send(expenseObj);
  } catch (err) {
    response.sendStatus(400);
  }
});

router.get('/:id', async (request, response) => {
  const {id} = request.params;
  try {
    const expenseObj = await Expense.findById(id);
    response.send(expenseObj);
  } catch (err) {
    response.sendStatus(400).send(err);
  }
});

module.exports = router;
