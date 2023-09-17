require('dotenv').config();
require('./database/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001;
const categoriesRoute = require('./routes/categories');
const expenseRoute = require('./routes/expense');

app.use(express.json());
app.use(cors());

app.use('/api/v1/categories', categoriesRoute);
app.use('/api/v1/expense', expenseRoute);

app.listen(PORT, () => {
  console.log('Server Running At ' + PORT);
});
