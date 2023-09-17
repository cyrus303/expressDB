const {Router} = require('express');
const categoryCtlr = require('../controllers/category-cltr');
const router = Router();

router.get('/', categoryCtlr.getCategories);
router.post('/', categoryCtlr.postCategory);
router.get('/:id', categoryCtlr.getCategoryById);
router.put('/:id', categoryCtlr.updateCategoryById);
router.delete('/:id', categoryCtlr.deleteCategoryById);

module.exports = router;
