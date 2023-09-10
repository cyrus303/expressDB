require('dotenv').config();
require('./database/index');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

const JsonData = [
  {
    username: 'user1',
    password: 'password1',
    email: 'user1@example.com',
  },
  {
    username: 'user2',
    password: 'password2',
    email: 'user2@example.com',
  },
  {
    username: 'user3',
    password: 'password3',
    email: 'user3@example.com',
  },
  {
    username: 'user4',
    password: 'password4',
    email: 'user4@example.com',
  },
  {
    username: 'user5',
    password: 'password5',
    email: 'user5@example.com',
  },
  {
    username: 'user6',
    password: 'password6',
    email: 'user6@example.com',
  },
  {
    username: 'user7',
    password: 'password7',
    email: 'user7@example.com',
  },
  {
    username: 'user8',
    password: 'password8',
    email: 'user8@example.com',
  },
  {
    username: 'user9',
    password: 'password9',
    email: 'user9@example.com',
  },
  {
    username: 'user10',
    password: 'password10',
    email: 'user10@example.com',
  },
];

const {Schema, model} = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = model('Category', categorySchema);

app.get('/api/v1/categories', (request, response) => {
  Category.find()
    .then((categories) => {
      response.send(categories);
    })
    .catch((error) => response.send(error));
});

app.post('/api/v1/categories', async (request, response) => {
  const {body} = request;

  try {
    const cat = await Category.create({name: body.name});
    response.send(cat);
  } catch (err) {
    response.sendStatus(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log('Server Running At ' + PORT);
});
