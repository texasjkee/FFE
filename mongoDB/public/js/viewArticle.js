const UI = {
  PREVIOUS: document.querySelector('.previous-button'),
  NEXT: document.querySelector('.next-button'),
  AUTHOR: document.querySelector('.author'),
  ARTICLE: document.querySelector('.article'),
  ARTICLE_BODY: document.querySelector('.article-body'),
}

const render = (article) => {
  UI.AUTHOR.textContent = article.author;
  UI.ARTICLE.textContent = article.title;
  UI.ARTICLE_BODY.textContent = article.body;
}

UI.PREVIOUS.addEventListener('click', () => console.log('previous'));
UI.NEXT.addEventListener('click', () => console.log('next'));

(async () => {
  const articles = await axios.get('/articles');
  articles.data.forEach(article => console.log(article));
  if (articles) {
    const firstArticle = articles.data[0];

    const author = await axios.get(`/author/${firstArticle.authorId}`);

    render({
      title: firstArticle.title,
      body: firstArticle.body,
      author: author.data.name
    });
    }; 
})();
  // if (articles) {
  //   articles.data.forEach(async article => {
  //     const author = await axios.get(`/author/${article.authorId}`);

  //     render({
  //       title: article.title,
  //       body: article.body,
  //       author: author.data.name
  //     });
  //   }); 
  // };