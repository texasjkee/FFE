const { Router } = require('express');
const router = Router();

const postController = require('../controller/postController');

router.route('/post/comments/:id').get(postController.getAllComments);
router.route('/post/comment/:id?').get(postController.getCurrentComment);
router.route('/posts').get(postController.getAllPosts);
router.route('/post/:id').get(postController.getPostById);
router.route('/post').post(postController.createNewPost);
router.route('/posts/comment').post(postController.addComment);
router.route('/jkee').get(postController.addReplyComment);
askdjlkjsadskasdj
module.exports = router;