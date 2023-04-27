const fs = require('fs');

(async () => {
  console.log('queue #1')
  const text = await fs.promises.readFile('./example.txt', 'utf-8', err => console.log(err))
  const content = `${text} + \n Yo babe`;

  console.log('queue #2')
  await fs.promises.writeFile('./example.txt', content, err => console.log(err))
})();

//It's not commit

console.log('End')