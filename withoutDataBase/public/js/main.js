//Get UI 
const titlePost = document.querySelector('.post-title');
const bodyPost = document.querySelector('.post-body');
const saveButton = document.querySelector('.save-post__button');
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

const removeList = (e) => {
  const _click = e.type === 'click'; 
  const _backspace = e.key === 'Backspace';

  if (_click || _backspace) {
    const allPosts = document.querySelectorAll('.post-wrapper');
    allPosts.forEach(post => post.remove());
  }
}

//Render
const createPost = (post) => {
  const lay = document.querySelector('.invisibleDiv');

  const postWrapper = document.createElement('div');   
  postWrapper.classList.add('post-wrapper');

  const postTitle = document.createElement('div');   
  postTitle.classList.add('title-post');
  postTitle.textContent = post.title;

  const postBody = document.createElement('div');   
  postBody.classList.add('body-post');
  postBody.textContent = post.body;

  const postHashtag = document.createElement('div');   
  postHashtag.classList.add('hashtag-list__post');
  postHashtag.textContent =  post.hashtag ? `#${post.hashtag}` : '';
  
  lay.append(postWrapper);
  postWrapper.appendChild(postTitle);
  postWrapper.appendChild(postHashtag);
  postTitle.append(postBody);

  postTitle.addEventListener('click', changeVisable)
}

//Controller
const addPost = async (e) => {
  e.preventDefault();

  //TO_DO: Try to get it out.
  const postModel = {
    id: +new Date(),
    title: titlePost.value,
    body: bodyPost.value,
    hashtag: selectedHashtag,
  }

  if (postModel.title && postModel.body) {
    const result = await axios.post('/posts?', {post: postModel});

    const foundPost = result.data.message; 
    createPost(foundPost);
  }
}

const searchPost = async () => {
  let validValue;

  if (searchInput.value !== 'null') validValue = searchInput.value;

  const result = await axios.post('/filter?', {filter: validValue});

  if (result.data.message) result.data.message.forEach(post => createPost(post));
}

const debounce = (func, waitTime) => {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, waitTime)
  }
}

hashtags.forEach(hashtag => hashtag.addEventListener('click', changeCurrentActive));
hashtags.forEach(hashtag => hashtag.addEventListener('click', takeHashtagText));

searchInput.addEventListener('keyup', debounce(searchPost, 650));
searchInput.addEventListener('keyup', (e) => removeList(e));
searchInput.addEventListener('click', (e) => removeList(e));

saveButton.addEventListener('click', addPost);
saveButton.addEventListener('click', clearPostValue);