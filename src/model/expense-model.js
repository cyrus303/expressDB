const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const expenseScheme = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  expenseDate: {
    type: Date,
    default: new Date(),
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});

const Expense = model('Expense', expenseScheme);

module.exports = Expense;
