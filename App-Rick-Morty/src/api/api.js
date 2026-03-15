import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const API = axios.create({
    baseURL: BASE_URL,
});

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
