const Product = require('../models/product.model');

const fakeFruitsBar = {
  fakeData: true,
  number: 5,
  1: {
    name: 'banana',
    sugar: 14
  },
  2: {
    name: 'apple',
    sugar: 12
  },
  3: {
    name: 'orange',
    sugar: 21
  },
  4: {
    name: 'ananas',
    sugar: 14
  },
  5: {
    name: 'watermelon',
    sugar: 2
  }
  5: {
    name: 'melon',
    sugar: 4
  }
};

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};