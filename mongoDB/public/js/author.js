const UI = {
  AUTHOR_INPUT: document.querySelector('.author-input'),  
  AUTHOR_BTN: document.querySelector('.add-author') 
};

const clearValue = () => {
  UI.AUTHOR_INPUT.value = null;
};

const renderAuthor = (author) => {
  const creater = document.querySelector('.invisibleDiv');
  const div = document.createElement('div');
  div.className = 'author-item';
  div.textContent = author;
  
  creater.append(div);
};

(async () => {
  const authors = await axios.get('/authors');
  authors.data.forEach(author => renderAuthor(author.name));
})();

const addAuthor = async () => {
  const author = UI.AUTHOR_INPUT.value;
  const result = await axios.post('/author', {name: author})
  renderAuthor(result.data.name);

  clearValue();
}

UI.AUTHOR_BTN.addEventListener('click', addAuthor);