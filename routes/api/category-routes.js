const router = require('express').Router();
const { Category, Product } = require('../models');


router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Product,
          as: 'products',
        },
      ],
    });
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findOne({
      where: { id },
      include: [
        {
          model: Product,
          as: 'products',
        },
      ],
    });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
   const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {

  try {
    const { id } = req.params;

  
    const [updated] = await Category.update(req.body, {
      where: { id }
    });
    if (updated) {
      const updatedCategory = await Category.findOne({ where: { id } });
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.destroy({
      where: { id }
    });

    if (deleted) {
      res.status(200).json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;