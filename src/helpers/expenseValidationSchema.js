const expenseValidationSchema = {
  title: {
    notEmpty: {
      errorMessage: 'Title is required',
    },
  },
  description: {
    isLength: {
      errorMessage: 'min of 3 charcters required',
      options: {min: 3},
    },
  },
  amount: {
    notEmpty: {
      errorMessage: 'amount is required',
    },
    isLength: {
      errorMessage: 'min of 1$ is required',
      options: {min: 1},
    },
  },
  expenseDate: {},
  categoryId: {
    notEmpty: {
      errorMessage: 'category id required to link expense',
    },
  },
};

module.exports = expenseValidationSchema;
