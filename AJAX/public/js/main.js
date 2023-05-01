//Get UI 
const titlePost = document.querySelector('.post-title');
const bodyPost = document.querySelector('.post-body');
const savePostButton = document.querySelector('.save-post__button');

//Render
const createPost = (title, body) => {
  const lay = document.querySelector('.append');

  const titlePost = document.createElement('div');   
  titlePost.classList.add('title-product');
  titlePost.textContent = title;

  const bodyPost = document.createElement('div');   
  bodyPost.classList.add('body-product');
  bodyPost.textContent = body;

  lay.append(titlePost);
  titlePost.append(bodyPost);

  titlePost.addEventListener('click', changeVisable)
}

function changeVisable () {
  const bodyPostTest = this.childNodes[1];
  bodyPostTest.classList.toggle('show')  
}

//Controller
const run = async (e) => {
  e.preventDefault();

  const post = {
    title: titlePost.value,
    body: bodyPost.value
  }

  const result = await axios.post('/posts?', { params: post});

  createPost(post.title, post.body);
}

//Runer
savePostButton.addEventListener('click', run);