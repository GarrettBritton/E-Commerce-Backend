const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Jordan 1s',
  },
  {
    category_name: 'Jordan 3s',
  },
  {
    category_name: 'Blazers',
  },
  {
    category_name: 'Jordan 4s',
  },
  {
    category_name: 'Jordan 5s',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;