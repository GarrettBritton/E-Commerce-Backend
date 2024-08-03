const { Product } = require('../models');

const productData = [
  {
    product_name: 'Air Jordan 1 mid Light Smoke Grey',
    price: 113.00,
    stock: 16,
    category_id: 1,
  },
  {
    product_name: 'Air Jordan 3 Retro Midnight Navy',
    price: 219.0,
    stock: 15,
    category_id: 5,
  },
  {
    product_name: 'Nike Mens Blazer Mid 77 Vintage',
    price: 77.90,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: 'Jordan 4 Retro Oxidized Green',
    price: 166.00,
    stock: 5,
    category_id: 3,
  },
  {
    product_name: 'Jordan 5 Retro SE Sail',
    price: 162.00,
    stock: 10,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;