# Frontend Setup Instructions

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Features

- User authentication (login/register)
- Email verification
- Role-based access control
- Blog post management
  - View all posts
  - View single post
  - Create new post (Admin only)
  - Edit post (Admin only)
  - Delete post (Admin only)

## Components

- `Navbar`: Navigation bar with role-based menu items
- `ProtectedRoute`: Route protection based on authentication and roles
- `PostForm`: Form for creating and editing posts
- `AuthContext`: Authentication context for managing user state

## Pages

- `/`: Home page with list of blog posts
- `/login`: Login page
- `/register`: Registration page
- `/verify-email/:token`: Email verification page
- `/posts/:id`: Single post view
- `/posts/new`: Create new post (Admin only)
- `/posts/:id/edit`: Edit post (Admin only)

## Dependencies

- React
- React Router
- Material-UI
- Axios
- React Toastify
