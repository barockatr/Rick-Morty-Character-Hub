import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CharacterModal.css';

export default function CharacterModal({ character, onClose }) {
    const navigate = useNavigate();
    if (!character) return null;

    const statusColor = {
        alive: '#00ff41',
        dead: '#ff4444',
        unknown: '#94a3b8'
    }[character.status?.toLowerCase()] || '#94a3b8';

    const handleViewFull = () => {
        onClose();
        setTimeout(() => navigate(`/detail/${character.id}`), 300);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                <div className="modal-image-side">
                    <img src={character.image} alt={character.name} />
                    <div className="modal-img-overlay" />
                    <div className="modal-status" style={{ color: statusColor, borderColor: statusColor }}>
                        <span className="modal-status-dot" style={{ background: statusColor, boxShadow: `0 0 8px ${statusColor}` }} />
                        {character.status}
                    </div>
                </div>

                <div className="modal-info-side">
                    <h2 className="modal-name">{character.name}</h2>
                    <span className="modal-id">#{character.id}</span>

                    <div className="modal-grid">
                        <div className="modal-item">
                            <span className="modal-label">🧬 Species</span>
                            <span className="modal-value">{character.species}</span>
                        </div>
                        <div className="modal-item">
                            <span className="modal-label">⚧ Gender</span>
                            <span className="modal-value">{character.gender}</span>
                        </div>
                        <div className="modal-item">
                            <span className="modal-label">🌍 Origin</span>
                            <span className="modal-value">{character.origin?.name || character.origin}</span>
                        </div>
                        <div className="modal-item">
                            <span className="modal-label">📍 Location</span>
                            <span className="modal-value">{character.location?.name || 'Unknown'}</span>
                        </div>
                    </div>

                    <button className="modal-full-btn" onClick={handleViewFull}>
                        🔬 View Full Profile
                    </button>
                </div>
            </div>
        </div>
    );
}
