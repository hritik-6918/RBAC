import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navbar } from './components/Navbar';
import { Posts } from './pages/Posts';
import { Post } from './pages/Post';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { VerifyEmail } from './pages/VerifyEmail';
import { PostForm } from './components/PostForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route path="/posts/:id" element={<Post />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verify-email/:token" element={<VerifyEmail />} />
                    <Route
                        path="/posts/new"
                        element={
                            <ProtectedRoute roles={['admin']}>
                                <PostForm />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/posts/:id/edit"
                        element={
                            <ProtectedRoute roles={['admin']}>
                                <PostForm isEdit />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
                <ToastContainer />
            </Router>
        </AuthProvider>
    );
}

export default App; 