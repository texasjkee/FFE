//Get UI
const titlePost = document.querySelector('.post-title');
const bodyPost = document.querySelector('.post-body');
const saveButton = document.querySelector('.save-article__button');
const arcticleForm = document.getElementById('arcticle-form');
//TO_DO: document.forms;

let authorName;

const clearArcticleValue = () => {
  titlePost.value = null;
  bodyPost.value = null;
}

const chooseAuthor = (e) => {
  authorName = e.target.textContent;
}

const renderAuthor = (author) => {
  const creater = document.querySelector('.invisibleDiv');
  const div = document.createElement('div');
  div.className = 'author-item';
  div.textContent = author;
  
  creater.append(div);
  const autorItems = document.querySelectorAll('.author-item');
  autorItems.forEach(autor => autor.addEventListener('click',(e) => chooseAuthor(e)));
}

//Runner
(async () => {
  const result = await axios.post('/article?', {params: 'yo'})

  result.data.message.forEach(author => renderAuthor(author));
})();

//Controller
const addPost = async (e) => {
  e.preventDefault();
  //TO_DO: Try to get it out.
  const postModel = {
    id: +new Date(),
    title: titlePost.value,
    body: bodyPost.value,
    author: authorName, 
  }

  if (postModel.title && postModel.body) {
    const result = await axios.post('/article?', {article: postModel});
    // const foundPost = result.data.message; 
    // console.log(foundPost)
  }

  clearArcticleValue();
}

// const debounce = (func, waitTime) => {
//   let timeout;

//   return () => {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, waitTime)
//   }
// }

arcticleForm.addEventListener('submit', addPost);
// searchInput.addEventListener('keyup', debounce(searchPost, 650));
