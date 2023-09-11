const mongoose = require('mongoose');
const {connect, Schema, model} = mongoose;

connect(
  `mongodb+srv://${process.env.UserName}:${process.env.Password}@${process.env.MongoDB_URI}/express_DB`
)
  .then(() => console.log('connected to DB'))
  .catch((err) => console.log(err));

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

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

const Category = model('Category', categorySchema);
const Expense = model('Expense', expenseScheme);

module.exports = {Category, Expense};
