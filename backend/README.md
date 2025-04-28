# Backend Setup Instructions

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blog-rbac
JWT_SECRET=your-secret-key
JWT_EXPIRE=30d
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
CLIENT_URL=http://localhost:3000
```

### Environment Variables Explanation

- `PORT`: The port number for the backend server (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `JWT_EXPIRE`: JWT token expiration time
- `EMAIL_SERVICE`: Email service provider (e.g., gmail)
- `EMAIL_USER`: Email address for sending verification emails
- `EMAIL_PASS`: Email password or app-specific password
- `CLIENT_URL`: Frontend application URL

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Start the production server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user info
- GET /api/auth/verify-email/:token - Verify email address

### Blog Posts

- GET /api/posts - Get all blog posts
- GET /api/posts/:id - Get a specific post
- POST /api/posts - Create a new post (Admin only)
- PUT /api/posts/:id - Update a post (Admin only)
- DELETE /api/posts/:id - Delete a post (Admin only)
