const createList = (title) => {
  const div = document.createElement('div');   
  div.classList.add('product__list-item')
  div.textContent = title;
  const body = document.body
  body.append(div);
}

const getPostTitleValue = () => {
  const value = document.querySelector('.post-title__input').value;
  console.log(value); 
}

const getPostBodyValue = () => {
  const value = document.querySelector('.post-body__input').value;
  console.log(value);  
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
        body: 'Body'
      } 
    }
  )
  createList(result.data.message.params.title);
  console.log(result.data.message.params);
}

const postButton = document.querySelector('.post-button');
const refreshButton = document.querySelector('.refresh');
postButton.addEventListener('click', run);
refreshButton.addEventListener('click', getPostTitleValue);