const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const expenseScheme = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minLength: 3,
  },
  amount: {
    type: Number,
    required: true,
    min: 1,
  },
  expenseDate: {
    type: Date,
    default: new Date(),
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const Expense = model('Expense', expenseScheme);

module.exports = Expense;
