const titleArticle = document.querySelector('.article-title');
const bodyArticle = document.querySelector('.article-body');
const saveButton = document.querySelector('.save-article__button');
const arcticleForm = document.getElementById('arcticle-form');

let authorId;

const clearArcticleValue = () => {
  titleArticle.value = null;
  bodyArticle.value = null;
};

const chooseAuthor = (e) => {
  authorId = e.target.id;
}

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
    title: titleArticle.value,
    body: bodyArticle.value,
    authorId, 
  };

  const validArticle = article.title && article.body && article.authorId;

  if (validArticle) {
    const result = await axios.post('/article', article);
    // If doesn't return res. ; Thread is going to block;
    console.log(result.data);
    clearArcticleValue();
  };
};

arcticleForm.addEventListener('submit', addArticle);

// const debounce = (func, waitTime) => {
//   let timeout;

//   return () => {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, waitTime)
//   }
// }

// searchInput.addEventListener('keyup', debounce(searchPost, 650));