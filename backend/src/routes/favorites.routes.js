const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');
const { getFavorites, addFavorite, removeFavorite } = require('../controllers/favorites.controller');

router.use(authMiddleware);

router.get('/', getFavorites);
router.post('/', addFavorite);
router.delete('/:characterId', removeFavorite);

module.exports = router;
