const express = require('express');
const router = express.Router();
const { protect, authorize, verifyEmail } = require('../middleware/auth');
const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/posts');

router.route('/')
    .get(getPosts)
    .post(protect, verifyEmail, authorize('admin'), createPost);

router.route('/:id')
    .get(getPost)
    .put(protect, verifyEmail, authorize('admin'), updatePost)
    .delete(protect, verifyEmail, authorize('admin'), deletePost);

module.exports = router; 