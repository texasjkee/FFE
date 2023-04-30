const createPost = (title, body) => {
  const lay = document.querySelector('.append');

  const titlePost = document.createElement('div');   
  titlePost.classList.add('title-product');
  titlePost.textContent = title;

  const bodyPost = document.createElement('div');   
  bodyPost.classList.add('body-product');
  bodyPost.textContent = body;

  lay.append(titlePost);
  lay.append(bodyPost);
}

const showPost = () => {
  const titlePosts = document.querySelectorAll('.title-product');

  const changeVisable = () => {
    const bodyPostClass = document.querySelector('.body-product');
    bodyPostClass.classList.toggle('show')  
  }

  titlePosts.forEach(post => {
    post.addEventListener('click', changeVisable);
  })
}

const getPostTitleValue = () => {
  const value = document.querySelector('.post-title__input').value;
  // console.log(value); 
}

const getPostBodyValue = () => {
  const value = document.querySelector('.post-body__input').value;
  // console.log(value);  
}

const titleValue = document.querySelector('.post-title__input').value;
 
const run = async () => {
  const result = await axios.post('/products?',
    // {params: 
    //   {
    //     title: 'post#1',
    //     body: 'test'
    //   } 
    // }
    { params: 
      {
        title: getPostTitleValue(),
        body: getPostTitleValue()      
      } 
    }
  )
  const titlePost =  result.data.message.params.title;
  const bodyPost = result.data.message.params.body;
  createPost(titlePost, bodyPost);
}

const savePostButton = document.querySelector('.save-post__button');

savePostButton.addEventListener('click', run);
savePostButton.addEventListener('click', showPost);