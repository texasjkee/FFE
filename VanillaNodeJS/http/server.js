const http = require('http');
const fs = require('fs');

const data = require('./dataBase/states.js');

const PORT = 3333;

//https:www.example.ua/id:1  -valid URL
const app = http.createServer((req, res) => {
  
  const validIdNumber = req.url.split(':').filter(el => !!Number(el));
  const idUrl = `/id:${validIdNumber}`;
  const foundId = data.find(data => data.id == [validIdNumber[0]]);

  const foundTitle = foundId ? foundId.title : 'Id not found';
  const validTitle = JSON.stringify(foundTitle);

  switch(req.url){
    case '/': res.write('Hello dude :)')
    break;
    case idUrl: res.write(validTitle)
    break;
    default: res.write('Bad request')
  }  

  res.end();
})

app.listen(PORT, () => {
  console.log(`Running server on ${PORT}`)
});