console.log('Get it =)')

const run = async () => {
  const result = await axios.get('/products?sortByWeight=200&country=Ukraine')
  result.data.message.forEach(product => {
    console.log(product);
  });
}

run();