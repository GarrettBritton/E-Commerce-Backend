const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Retro',
  },
  {
    tag_name: 'Grey',
  },
  {
    tag_name: 'White',
  },
  {
    tag_name: 'Cream',
  },
  {
    tag_name: 'Green',
  },
  {
    tag_name: 'Navy',
  },
  {
    tag_name: 'Midnight',
  },
  {
    tag_name: 'Mens',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;