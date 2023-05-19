const authorInput = document.querySelector('.author-input'); 
const addAthorButton = document.querySelector('.add-author'); 

const clearValue = () => {
  authorInput.value = null;
}

const getValue = async () => {
  const value = authorInput.value;

  const result = await axios.post('/author', {author: value})
  console.log(result.data.message);

  clearValue();
}

addAthorButton.addEventListener('click', getValue);