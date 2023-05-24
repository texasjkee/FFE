const articles = require('../models/articles');
const authors = require('../models/authors');

const getAthours = () => {
  return authors;
}

const addArticle = (article) => {
  if(article?.id){
    articles.push(article);
    return articles;
  }
} 

module.exports = { getAthours, addArticle };