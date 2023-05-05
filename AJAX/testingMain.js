//TO_DO: Why debounce doesn't working in arrow func? example:
// searchInput.addEventListener('keyup', (e) => debounce(funcHi, 500));

//TEST!!!
//=============================================================================


// const hideList = (e) => {
//   const eClick = e.type === 'click'; 
//   const eBackspace = e.key === 'Backspace';

//   const lay = document.querySelector('.append');

//   if(eClick || eBackspace) {
//     lay.childNodes.forEach(post => {
//       post.classList.add('hidden')
//     })
//   }
// }
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