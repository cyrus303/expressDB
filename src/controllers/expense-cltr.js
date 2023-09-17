const Expense = require('../model/expense-model');

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
  const {body} = request;
  try {
    const expenseObj = await Expense.create(body);
    response.send(expenseObj);
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
