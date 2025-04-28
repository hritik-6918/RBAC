# Blog Platform with Role-Based Access Control (RBAC)

A full-stack blog platform implementing Role-Based Access Control (RBAC) with user and admin roles.

## Features

- User authentication and authorization using JWT
- Role-based access control (Admin and User roles)
- Blog post management (CRUD operations)
- Email verification for new users
- Secure password handling
- Responsive React frontend
- RESTful API backend

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Nodemailer for email verification

### Frontend

- React
- React Router
- Axios for API calls
- Material-UI for styling

## Project Structure

```
blog-platform/
├── backend/           # Backend server code
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Custom middleware
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   └── utils/        # Utility functions
├── frontend/         # React frontend
│   ├── public/       # Static files
│   └── src/          # React source code
└── README.md         # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   EMAIL_SERVICE=your_email_service
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- POST /api/auth/verify-email - Verify email address
- GET /api/auth/me - Get current user info

### Blog Posts

- GET /api/posts - Get all blog posts
- GET /api/posts/:id - Get a specific post
- POST /api/posts - Create a new post (Admin only)
- PUT /api/posts/:id - Update a post (Admin only)
- DELETE /api/posts/:id - Delete a post (Admin only)

## Security Features

- JWT-based authentication
- Password hashing using bcrypt
- Role-based access control
- Email verification
- Protected routes
- Input validation
- CORS protection
