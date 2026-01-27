import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CharacterModal.css';

export default function CharacterModal({ character, onClose }) {
    const navigate = useNavigate();

    if (!character) return null;

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'alive': return '#00ff41';
            case 'dead': return '#ff4444';
            default: return '#94a3b8';
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-content">
                    <div className="modal-image-container">
                        <img src={character.image} alt={character.name} />
                        <div className="status-badge" style={{ borderColor: getStatusColor(character.status) }}>
                            <span className="status-dot" style={{ backgroundColor: getStatusColor(character.status) }}></span>
                            {character.status}
                        </div>
                    </div>

                    <div className="modal-info">
                        <h2>{character.name}</h2>
                        <p className="char-id">ID: #{character.id}</p>

                        <div className="info-grid">
                            <div className="info-item">
                                <span className="label">Species</span>
                                <span className="value">{character.species}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Gender</span>
                                <span className="value">{character.gender}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Origin</span>
                                <span className="value">{character.origin?.name || character.origin}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Location</span>
                                <span className="value">{character.location?.name || 'Unknown'}</span>
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button className="view-full-btn" onClick={() => navigate(`/detail/${character.id}`)}>
                                View Full Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
