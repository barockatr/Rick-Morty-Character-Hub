const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: [
        'http://localhost:5173',
        'https://rick-morty-character-hub.vercel.app',
        'https://rick-morty-character-hub-ez9tgqbms.vercel.app'
    ],
    credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // ← línea nueva — responde preflight en todas las rutas

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
