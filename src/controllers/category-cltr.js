const Category = require('../model/category-model');

const categoryCtlr = {};

categoryCtlr.getCategories = (request, response) => {
  Category.find()
    .then((categories) => {
      response.send(categories);
    })
    .catch((error) => response.send(error));
};

categoryCtlr.postCategory = async (request, response) => {
  const {body} = request;
  try {
    const cat = await Category.create(body);
    response.send(cat);
  } catch (err) {
    console.log(err);
    response.sendStatus(400);
  }
};

categoryCtlr.getCategoryById = async (request, response) => {
  const {id} = request.params;
  try {
    const Item = await Category.findById(id);
    response.send(Item);
  } catch (err) {
    response.sendStatus(400).send(err);
  }
};

categoryCtlr.updateCategoryById = async (request, response) => {
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
};

categoryCtlr.deleteCategoryById = async (request, response) => {
  const {id} = request.params;
  try {
    const deletedObj = await Category.findByIdAndDelete(id);
    response.send(deletedObj);
  } catch (err) {
    response.sendStatus(400).send(err);
  }
};

module.exports = categoryCtlr;
