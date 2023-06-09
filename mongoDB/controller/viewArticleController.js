// const getArticle = () => {
//   if(articles.length !== 0) return articles;
// };

// const switchArticle = (reqTitle, switcher) => {
//   if (switcher === 'Next') {
//     const foundArticle = articles.find(article => article.title === reqTitle);
//     const foundIndex = articles.indexOf(foundArticle) + 1;

//     return foundIndex === articles.length ? articles[0] : articles[foundIndex]; 
//   }; 

//   if (switcher === 'Previous') {
//     const foundArticle = articles.find(article => article.title === reqTitle);
//     const foundIndex = articles.indexOf(foundArticle);

//     return foundIndex === 0 ? articles[articles.length -1] : articles[foundIndex - 1]; 
//   };
// };

// module.exports = { getArticle, switchArticle };