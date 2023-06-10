const UI = {
  ARTICLE_BODY: document.querySelector('.article-body'),
  ARTICLE_TITLE: document.querySelector('.article-title'),
  ARTICLE_FORM: document.getElementById('arcticle-form'),
  AUTHOR_SELECT: document.querySelector('.author'),
  SAVE_BTN: document.querySelector('.save-article__button')
};

let authorId;

const clearArcticleValue = () => {
  UI.ARTICLE_TITLE.value = null;
  UI.ARTICLE_BODY.value = null;
};

const renderAuthor = (author) => {
  const option = document.createElement('option');
  option.className = 'author-item';
  option.value = author._id;
  option.textContent = author.name;
  
  UI.AUTHOR_SELECT.append(option);
};

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

UI.AUTHOR_SELECT.addEventListener('change', (e) => authorId = e.target.value);
UI.ARTICLE_FORM.addEventListener('submit', addArticle);