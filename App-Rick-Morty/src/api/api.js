import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3001/api',
});

// Interceptor — agrega el token a cada request automáticamente
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authAPI = {
    register: (userData) => API.post('/auth/register', userData),
    login: (userData) => API.post('/auth/login', userData),
};

export const favoritesAPI = {
    getAll: () => API.get('/favorites'),
    add: (character) => API.post('/favorites', character),
    remove: (characterId) => API.delete(`/favorites/${characterId}`),
};

export default API;
