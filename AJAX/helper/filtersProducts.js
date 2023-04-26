const products = require('../dataBase/products');

module.exports = {
  filterProducts: (weight, country) => {
    const foundProduct = 
      products.filter(product => product.country === country)
        .filter(product => product.weight === weight);

    return foundProduct;
  },
};

