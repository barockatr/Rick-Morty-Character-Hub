const Favorite = require('../models/Favorite');

const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find({ userId: req.userId });
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addFavorite = async (req, res) => {
    try {
        const { characterId, name, status, species, gender, origin, image, type } = req.body;

        const existing = await Favorite.findOne({ userId: req.userId, characterId });
        if (existing) {
            return res.status(400).json({ message: 'Character already in favorites' });
        }

        const favorite = await Favorite.create({
            userId: req.userId,
            characterId, name, status, species, gender, origin, image, type
        });

        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const removeFavorite = async (req, res) => {
    try {
        const { characterId } = req.params;
        await Favorite.findOneAndDelete({ userId: req.userId, characterId: Number(characterId) });
        res.json({ message: 'Removed from favorites' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { getFavorites, addFavorite, removeFavorite };
