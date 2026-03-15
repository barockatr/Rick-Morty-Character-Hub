const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth.routes');
const favoritesRoutes = require('./routes/favorites.routes');

app.use('/api/auth', authRoutes);
app.use('/api/favorites', favoritesRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Rick & Morty API running' });
});

module.exports = app;
