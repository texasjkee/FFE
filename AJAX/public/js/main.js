const createList = (title) => {
    const div = document.createElement('div');   
    div.classList.add('product__list-item')
    div.textContent = title;
    const body = document.body
    body.append(div);
}

const getMinPriceValue = () => {
  return +document.querySelector('.min-price').value;
}

const getMaxPriceValue = () => {
  return +document.querySelector('.max-price').value;
}

const productsModel = {
  min: getMinPriceValue(),
  max: getMaxPriceValue(),
}

// filterButton.addEventListener('click', filter)
// Questions "How to add params into the callback?"

const run = async () => {
  const result = await axios.get('/products?', { params: productsModel })
  result.data.message.forEach(product => {
    createList(product.title);
  });
}

const filterButton = document.querySelector('.filter-button');
filterButton.addEventListener('click', run);
