//Get UI 
const titlePost = document.querySelector('.post-title');
const bodyPost = document.querySelector('.post-body');
const savePostButton = document.querySelector('.save-post__button');
const searchInput = document.querySelector('.search-input');
const hashtags = document.querySelectorAll('.hashtag-list__iteam');

let selectedHashtag;
let searchValue;

const deleteActiveOfOther = () => {
  hashtags.forEach(hashtag => hashtag.classList.remove('active-tag'));
}

const clearPostValue = () => {
  titlePost.value = null;
  bodyPost.value = null;

  deleteActiveOfOther();
}

function changeCurrentActive () {
  deleteActiveOfOther();
  this.classList.toggle('active-tag');
}

function takeHashtagText () {
  selectedHashtag = this.textContent.replace(/^./, ""); 
}

function changeVisable () {
  const bodyPostTest = this.childNodes[1];
  bodyPostTest.classList.toggle('show')  
}

function showTags () {
  const lay = document.querySelector('.append');

  lay.childNodes.forEach(post => {
    if(post.lastChild.textContent === searchInput.value) {
      post.classList.remove('hidden');
      post.classList.add('show');
    }
  })
}

//Render
const createPost = (title, body, hashtag) => {
  const lay = document.querySelector('.append');

  const postWrapper = document.createElement('div');   
  postWrapper.classList.add('post-wrapper');

  const titlePost = document.createElement('div');   
  titlePost.classList.add('title-post');
  titlePost.textContent = title;

  const bodyPost = document.createElement('div');   
  bodyPost.classList.add('body-post');
  bodyPost.textContent = body;

  const hashtagOfTitle = document.createElement('div');   
  hashtagOfTitle.classList.add('hashtag-list');
  hashtagOfTitle.textContent = hashtag;
  
  lay.append(postWrapper);
  postWrapper.appendChild(titlePost);
  postWrapper.appendChild(hashtagOfTitle);
  titlePost.append(bodyPost);

  titlePost.addEventListener('click', changeVisable)
}

const hideList = (e) => {
  const eClick = e.type === 'click'; 
  const eBackspace = e.key === 'Backspace';

  const lay = document.querySelector('.append');

  if(eClick || eBackspace) {
    lay.childNodes.forEach(post => {
      post.classList.add('hidden')
    })
  }
}

//Controller
const run = async (e) => {
  e.preventDefault();

  //TO_DO: Try to get it out.
  const post = {
    id: +new Date(),
    title: titlePost.value,
    body: bodyPost.value,
    hashtag: selectedHashtag,
  }

  if(post.title && post.body) {
    const result = await axios.post('/posts?', {post});

    const resTitle = result.data.message.title;
    const resBody = result.data.message.body;
    const resHashtag = result.data.message.hashtag

    createPost(resTitle, resBody, resHashtag,'axios');
  }

  if(searchValue) {
    const resultFilter = await axios.post('/filter?', {filter: searchValue});
    showTags();
  }
}

const findPost = (e) => {
  searchValue = e.target.value.toLowerCase();
  run(e);
}

//TO_DO: Finish debounce function.
// const debounce = (func, waitTime) => {
//   let timeout;

//   return () => {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, waitTime)
//   }
// }

hashtags.forEach(hashtag => hashtag.addEventListener('click', changeCurrentActive));
hashtags.forEach(hashtag => hashtag.addEventListener('click', takeHashtagText));

searchInput.addEventListener('click', (e) => hideList(e));
searchInput.addEventListener('keyup', (e) => hideList(e));
searchInput.addEventListener('keyup', (e) => findPost(e));

//Runner
savePostButton.addEventListener('click', run);
savePostButton.addEventListener('click', clearPostValue);