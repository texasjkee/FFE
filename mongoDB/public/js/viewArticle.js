const UI = {
  PREVIOUS: document.querySelector('.previous-button'),
  NEXT: document.querySelector('.next-button'),
  ARTICLE_AUTHOR: document.querySelector('.article-author'),
  ARTICLE_TITLE: document.querySelector('.article-title'),
  ARTICLE_BODY: document.querySelector('.article-body'),
}

const renderArticles = (article) => {
  UI.ARTICLE_AUTHOR.textContent = article.author;
  UI.ARTICLE_TITLE.textContent = article.title;
  UI.ARTICLE_BODY.textContent = article.body;
};

const frontArticles = [];

(async () => {
  const articles = await axios.get('/articles');
  if (articles) {
      articles.data.forEach(async article => {
        const author = await axios.get(`/author/${article.authorId}`);
        frontArticles.push({ 
          title: article.title, 
          body: article.body, 
          author: author.data.name 
        });
        renderArticles(frontArticles[0]);
    });
  }; 
})();

const move = async (action) => {
  if (action === 'next') {
    const foundArticle = frontArticles.find(article => article.title === UI.ARTICLE_TITLE.textContent);
    const foundIndex = frontArticles.indexOf(foundArticle) + 1;

    const result = foundIndex === frontArticles.length ? frontArticles[0] : frontArticles[foundIndex]; 
    renderArticles(result);
  }; 

  if (action === 'previous') {
    const foundArticle = frontArticles.find(arr => arr.title ===  UI.ARTICLE_TITLE.textContent);
    const foundIndex = frontArticles.indexOf(foundArticle);

    const result = foundIndex === 0 ? frontArticles[frontArticles.length -1] : frontArticles[foundIndex - 1]; 
    renderArticles(result);
  };
};

UI.NEXT.addEventListener('click', () => move('next'));
UI.PREVIOUS.addEventListener('click', () => move('previous'));