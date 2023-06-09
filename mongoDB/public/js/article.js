const UI = {
  ARTICLE_BODY: document.querySelector('.article-body'),
  ARTICLE_TITLE: document.querySelector('.article-title'),
  ARTICLE_FORM: document.getElementById('arcticle-form'),
  SAVE_BTN: document.querySelector('.save-article__button')
};

let authorId;

const clearArcticleValue = () => {
  UI.ARTICLE_TITLE.value = null;
  UI.ARTICLE_BODY.value = null;
};

const renderAuthor = (author) => {
  const creater = document.querySelector('.invisibleDiv');
  const div = document.createElement('div');
  div.className = 'author-item';
  div.id = author._id;
  div.textContent = author.name;
  
  creater.append(div);

  const autorItems = document.querySelectorAll('.author-item');
  autorItems.forEach(autor => autor.addEventListener('click',(e) => chooseAuthor(e)));
}

(async () => {
  const authors = await axios.get('/authors');
  authors.data.forEach(author => renderAuthor(author));
})();

const addArticle = async (e) => {
  e.preventDefault();

  const article = {
    title: UI.ARTICLE_TITLE.value,
    body: UI.ARTICLE_BODY.value,
    authorId, 
  };

  const validArticle = article.title && article.body && article.authorId;

  if (validArticle) {
    const result = await axios.post('/article', article);
    //TO_DO: if doesn't return res.(smth), thread is going to block.
    console.log(result.data);
    clearArcticleValue();
  };
};

UI.ARTICLE_FORM.addEventListener('submit', addArticle);