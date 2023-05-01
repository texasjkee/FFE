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

const title = document.querySelector('.post-title');
const body = document.querySelector('.post-body');

const run = async (e) => {
  e.preventDefault();
  const result = await axios.post('/products?',
    // {params: 
    //   {
    //     title: 'post#1',
    //     body: 'test'
    //   } 
    // }
    { params: 
      {
        title: title.value,
        body: body.value
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