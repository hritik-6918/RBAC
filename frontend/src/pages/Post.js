import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Divider
} from '@mui/material';
import { useAuth } from '../context/AuthContext';

export const Post = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPost();
    }, [id]);

    const fetchPost = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
            setPost(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching post:', error);
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`);
            navigate('/');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    if (loading) {
        return (
            <Container>
                <Typography>Loading...</Typography>
            </Container>
        );
    }

    if (!post) {
        return (
            <Container>
                <Typography>Post not found</Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Box sx={{ mt: 4, mb: 4 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h4" component="h1" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            By {post.author.name}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {post.content}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" color="textSecondary">
                            Created: {new Date(post.createdAt).toLocaleDateString()}
                        </Typography>
                        {post.updatedAt !== post.createdAt && (
                            <Typography variant="body2" color="textSecondary">
                                Updated: {new Date(post.updatedAt).toLocaleDateString()}
                            </Typography>
                        )}
                    </CardContent>
                </Card>
                {(user?.role === 'admin' || user?._id === post.author._id) && (
                    <Box sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate(`/posts/${id}/edit`)}
                            sx={{ mr: 1 }}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </Box>
                )}
            </Box>
        </Container>
    );
}; 