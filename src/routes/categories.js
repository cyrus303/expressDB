const {Router} = require('express');
const {Category} = require('../database/index');
const router = Router();

router.get('/', (request, response) => {
  Category.find()
    .then((categories) => {
      response.send(categories);
    })
    .catch((error) => response.send(error));
});

router.post('/', async (request, response) => {
  const {body} = request;

  try {
    const cat = await Category.create({name: body.name});
    response.send(cat);
  } catch (err) {
    response.sendStatus(400).send(err);
  }
});

router.get('/:id', async (request, response) => {
  const {id} = request.params;
  try {
    const Item = await Category.findById(id);
    response.send(Item);
  } catch (err) {
    response.sendStatus(400).send(err);
  }
});

router.put('/:id', async (request, response) => {
  const {id} = request.params;
  const {body} = request;
  try {
    const updatedObj = await Category.findByIdAndUpdate(id, body, {
      runValidators: true,
      new: true,
    });
    response.send(updatedObj);
  } catch (err) {
    console.log(err);
    response.sendStatus(400).send(err);
  }
});

router.delete('/:id', async (request, response) => {
  const {id} = request.params;
  try {
    const deletedObj = await Category.findByIdAndDelete(id);
    response.send(deletedObj);
  } catch (err) {
    response.sendStatus(400).send(err);
  }
});

module.exports = router;
