import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Alert
} from '@mui/material';

export const PostForm = ({ isEdit = false }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(isEdit);

    useEffect(() => {
        if (isEdit) {
            fetchPost();
        }
    }, [isEdit, id]);

    const fetchPost = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
            setFormData({
                title: res.data.data.title,
                content: res.data.data.content
            });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching post:', error);
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`http://localhost:5000/api/posts/${id}`, formData);
            } else {
                await axios.post('http://localhost:5000/api/posts', formData);
            }
            navigate('/');
        } catch (error) {
            setError(error.response?.data?.error || 'An error occurred');
        }
    };

    if (loading) {
        return (
            <Container>
                <Typography>Loading...</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography component="h1" variant="h5">
                    {isEdit ? 'Edit Post' : 'Create Post'}
                </Typography>
                {error && (
                    <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
                        {error}
                    </Alert>
                )}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        autoFocus
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="content"
                        label="Content"
                        id="content"
                        multiline
                        rows={10}
                        value={formData.content}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isEdit ? 'Update Post' : 'Create Post'}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}; 