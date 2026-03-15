const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    characterId: { type: Number, required: true },
    name:         { type: String, required: true },
    status:       { type: String },
    species:      { type: String },
    gender:       { type: String },
    origin:       { type: String },
    image:        { type: String },
    type:         { type: String }
}, { timestamps: true });

favoriteSchema.index({ userId: 1, characterId: 1 }, { unique: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
