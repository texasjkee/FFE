const authorInput = document.querySelector('.author-input'); 
const addAthorButton = document.querySelector('.add-author'); 

const clearValue = () => {
  authorInput.value = null;
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
  const author = authorInput.value;

  const result = await axios.post('/author', {name: author})
  renderAuthor(result.data.name);

  clearValue();
}

addAthorButton.addEventListener('click', addAuthor);