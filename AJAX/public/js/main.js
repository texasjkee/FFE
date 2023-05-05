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

const removeList = (e) => {
  const eClick = e.type === 'click'; 
  const eBackspace = e.key === 'Backspace';

  if(eClick || eBackspace) {
    const list = document.querySelector('.append');
    console.log(  list.childNodes)
    
    //TO_DO: Delete only one children
    list.childNodes.forEach(child => {
      console.log(child)
      list.lastChild.remove() 
    })
    // list.childNodes.forEach(child => console.log(child));
  }
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
  hashtagOfTitle.classList.add('hashtag-list__post');
  hashtagOfTitle.textContent = `#${hashtag}`;
  
  lay.append(postWrapper);
  postWrapper.appendChild(titlePost);
  postWrapper.appendChild(hashtagOfTitle);
  titlePost.append(bodyPost);

  titlePost.addEventListener('click', changeVisable)
}

//Controller
const addPost = async (e) => {
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
    const resHashtag = result.data.message.hashtag;

    createPost(resTitle, resBody, resHashtag);
  }
}

const searchPost = async (e) => {
  const result = await axios.post('/filter?', {filter: searchInput.value});

  if(result.data.message) {
    result.data.message.forEach(post => {
      console.log(post,'post');
      createPost(post.title, post.body, post.hashtag);
    })
  }
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

savePostButton.addEventListener('click', addPost);
savePostButton.addEventListener('click', clearPostValue);

//TO_DO: Why debounce doesn't working in arrow func? example:
// searchInput.addEventListener('keyup', (e) => debounce(funcHi, 500));



//TEST!!!
//=============================================================================

// searchInput.addEventListener('keyup', (e) => hideList(e));
// searchInput.addEventListener('click', (e) => hideList(e));
// searchInput.addEventListener('keyup', (e) => findPost(e));

// const findPost = (e) => {
//   searchValue = e.target.value.toLowerCase();
//   addPost(e);
// }


// function showTags () {
//   const lay = document.querySelector('.append');
//   console.log(searchInput.value)

//   lay.childNodes.forEach(post => {
//     const tagWithoutSimb = post.lastChild.textContent.replace(/^./, ""); 

//     if(tagWithoutSimb === searchInput.value.toLowerCase()) {
//       post.classList.remove('hidden');
//       post.classList.add('show');
//     }
//   })
// }