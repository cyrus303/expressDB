const Expense = require('../model/expense-model');
const {validationResult} = require('express-validator');

const expenseCltr = {};

expenseCltr.getAllExpense = async (request, response) => {
  try {
    const expenseDB = await Expense.find();
    response.send(expenseDB);
  } catch (err) {
    console.log(err);
    response.sendStatus(400).send(err);
  }
};

expenseCltr.postExpense = async (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.send({errors: errors.array()});
    } else {
      const {body} = request;
      const expenseObj = await Expense.create(body);
      response.send(expenseObj);
    }
  } catch (err) {
    console.log(err);
    response.sendStatus(400);
  }
};

expenseCltr.getById = async (request, response) => {
  const {id} = request.params;
  try {
    const expenseObj = await Expense.findById(id);
    response.send(expenseObj);
  } catch (err) {
    response.sendStatus(400).send(err);
  }
};

module.exports = expenseCltr;
