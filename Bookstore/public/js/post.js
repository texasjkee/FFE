const postTitle = document.querySelector('.post-title');
const postBody =  document.querySelector('.post-body');
const postComment = document.querySelector('.comment');

const renderPost = (post) => {
    const div = document.createElement('div');
    div.textContent = post;
    postBody.append(div);
};

const renderButton = (div) => {
    const button = document.createElement('button');
    button.textContent = 'Reply';
    button.classList = 'reply';

    div.append(button);
    button.addEventListener('click', answerToCommnet);
};

const renderComment = (comment, index) => {
    const div = document.createElement('div');
    div.textContent = comment;
    div.classList = 'comment';
    div.id = index;
    postBody.append(div);

    renderButton(div);
};

function answerToCommnet() {
    // console.log(this.parentElement.textContent);
     
    const textArea = document.createElement('textarea');
    textArea.classList = 'reply-comment_wrapper';

    const button = document.createElement('button');
    button.textContent = 'Add'
    button.classList = 'add-button';

    this.parentElement.append(textArea);
    this.parentElement.before(button);
    
    button.addEventListener('click', addComment);
};

function addComment() {
    console.log(this.parentElement)
}

(async () => {
    const result = await axios.get('/post/6492bcd126d197cf04497d6f');
    result.data.comments.forEach((comment, index) => {
       renderComment(comment, index); 
    });
    console.log(result.data.comments); 
})();