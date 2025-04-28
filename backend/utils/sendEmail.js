const nodemailer = require('nodemailer');
const config = require('../config/config');

const sendEmail = async (options) => {
    // Create transporter
    const transporter = nodemailer.createTransport({
        service: config.EMAIL_SERVICE,
        auth: {
            user: config.EMAIL_USER,
            pass: config.EMAIL_PASS
        }
    });

    // Define email options
    const mailOptions = {
        from: `Blog RBAC <${config.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        html: options.html
    };

    // Send email
    await transporter.sendMail(mailOptions);
};

exports.sendVerificationEmail = async (email, verificationToken) => {
    const verificationUrl = `${config.CLIENT_URL}/verify-email/${verificationToken}`;

    const message = `
        <h1>Email Verification</h1>
        <p>Please click the link below to verify your email address:</p>
        <a href="${verificationUrl}" target="_blank">Verify Email</a>
        <p>If you did not request this verification, please ignore this email.</p>
    `;

    await sendEmail({
        email,
        subject: 'Email Verification',
        html: message
    });
};

exports.sendPasswordResetEmail = async (email, resetToken) => {
    const resetUrl = `${config.CLIENT_URL}/reset-password/${resetToken}`;

    const message = `
        <h1>Password Reset Request</h1>
        <p>Please click the link below to reset your password:</p>
        <a href="${resetUrl}" target="_blank">Reset Password</a>
        <p>If you did not request this reset, please ignore this email.</p>
    `;

    await sendEmail({
        email,
        subject: 'Password Reset Request',
        html: message
    });
}; 