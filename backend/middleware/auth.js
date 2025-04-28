const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User');

// Protect routes
exports.protect = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                error: 'Not authorized to access this route'
            });
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, config.JWT_SECRET);
            req.user = await User.findById(decoded.id);
            next();
        } catch (err) {
            return res.status(401).json({
                success: false,
                error: 'Not authorized to access this route'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

// Grant access to specific roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                error: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};

// Verify email middleware
exports.verifyEmail = async (req, res, next) => {
    try {
        if (!req.user.isEmailVerified) {
            return res.status(403).json({
                success: false,
                error: 'Please verify your email address before accessing this route'
            });
        }
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}; 