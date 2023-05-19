const { Router } = require('express');
const route = Router();
// const fs = require('fs');

const db = require('../dataBase/authorsData');

route.post('/author', (req, res) => {
  db.push(req.body.author);
  // fs.writeFile('author.txt', JSON.stringify(arr), (err) => {
  //   if (err) console.log(err);
  // })
  res.json({message: db});
})

module.exports = {authorRoute: route, arr: db}