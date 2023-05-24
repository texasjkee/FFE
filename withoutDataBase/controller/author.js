const authors = require('../models/authors');

module.exports = addAuthor = (author) => {
  authors.push(author);
  return authors;
} 