const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
    register,
    login,
    getMe,
    verifyEmail
} = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/verify-email/:token', verifyEmail);

module.exports = router; 