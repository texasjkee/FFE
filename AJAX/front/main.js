console.log('Working');

const run = async () => {
  const result = await axios.get('/stud')
  console.log(result);
}

run();