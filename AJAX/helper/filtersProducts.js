const products = require('../dataBase/products');

module.exports = {
  filterByPrice : (min, max) => {
    const foundProducts = products
      .filter(product => product.price >= min)
      .filter(product => product.price <= max);
    return foundProducts
  }
};