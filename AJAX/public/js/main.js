//Get UI 
const titlePost = document.querySelector('.post-title');
const bodyPost = document.querySelector('.post-body');
const savePostButton = document.querySelector('.save-post__button');
const searchInput = document.querySelector('.search-input');

//Data base
const arr = 
[
  {
    title: 'Post#1',
    descriptions: 'Bla bla bla', 
    hashtag: 'security',
  },
  {
    title: 'Post#2',
    descriptions: 'Bla bla bla', 
    hashtag: 'psychology',
  },
  {
    title: 'Post#3',
    descriptions: 'Cooking nyam nyam nyam', 
    hashtag: 'cooking',
  },
  {
    title: 'Post#4',
    descriptions: 'Biology it is sience ', 
    hashtag: 'biology',
  },
  {
    title: 'Post#5',
    descriptions: 'Genetic it', 
    hashtag: 'biology',
  },
  {
    title: 'Post#6',
    descriptions: 'Bla bla bla', 
    hashtag: 'biogoo',
  },
];

const findPost = (e) => {
  const searchValue = e.target.value.toLowerCase();
  
  const foundPost = arr.filter(post => post.hashtag === searchValue);

  foundPost.forEach(post => {
    createPost(post.title, post.descriptions);
  })
}

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
    id: +new Date(),
    title: titlePost.value,
    body: bodyPost.value,
    hashtag: 'hashtag',
  }

  const result = await axios.post('/posts?', { params: post});

  const resTitle = result.data.message.title;
  const resBody = result.data.message.title;

  console.log(result.data.message)
  createPost(resTitle, resBody);
}

//Runer
savePostButton.addEventListener('click', run);
searchInput.addEventListener('keyup', (e) => {
  findPost(e);
});