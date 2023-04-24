const express = require('express');

const students = require('../db/students');
const route = express.Router();

route.get('/stud', (req, res) => {
  res.json(students)
})

module.exports = route;