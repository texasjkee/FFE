const UI = {
  PREVIOUS: document.querySelector('.previous-button'),
  NEXT: document.querySelector('.next-button'),
  AUTHOR: document.querySelector('.author'),
  ARTICLE: document.querySelector('.article'),
  ARTICLE_BODY: document.querySelector('.article-body'),
}

const render = (data) => {
  if (data) {
    UI.AUTHOR.textContent = data.author;
    UI.ARTICLE.textContent = data.title;
    UI.ARTICLE_BODY.textContent = data.body;
  }
}

UI.PREVIOUS.addEventListener('click', () => console.log('previous'));
UI.NEXT.addEventListener('click', () => console.log('next'));

(async () => {
  const result = await axios.post('/viewArticle?', {params: 'yo'})
  const data = result.data.message;
  
  if (data) {
    result.data.message.forEach(article => console.log(article));
    result.data.message.forEach(data => render(data));
  }
  
  // const data = {
  //   author: 'Oda',
  //   title: 'One Pice',
  //   body: 'Awesome',
  // }
  // render(data);
})();