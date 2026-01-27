import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";

export default function Detail(props) {

    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                    navigate('/home');
                }
                setLoading(false);
            })
            .catch(() => {
                window.alert('Error al cargar el personaje');
                navigate('/home');
            });

        return () => setCharacter(null);
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="detail-page">
                <div className="loading">
                    <div className="portal-loader"></div>
                    <p>Loading character data...</p>
                </div>
            </div>
        );
    }

    if (!character) return null;

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'alive': return '#00ff41';
            case 'dead': return '#ff4444';
            default: return '#94a3b8';
        }
    };

    return (
        <div className="detail-page">
            <button onClick={() => navigate(-1)} className="back-btn">
                ← Back
            </button>

            <div className="detail-container">
                <div className="detail-image-section">
                    <img src={character.image} alt={character.name} />
                    <div className="status-badge" style={{ borderColor: getStatusColor(character.status) }}>
                        <span className="status-dot" style={{ backgroundColor: getStatusColor(character.status) }}></span>
                        {character.status}
                    </div>
                </div>

                <div className="detail-info-section">
                    <h1>{character.name}</h1>
                    <p className="character-id">ID: #{character.id}</p>

                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Species</span>
                            <span className="info-value">{character.species}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Gender</span>
                            <span className="info-value">{character.gender}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Status</span>
                            <span className="info-value">{character.status}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Type</span>
                            <span className="info-value">{character.type || 'Unknown'}</span>
                        </div>
                    </div>

                    <div className="location-info">
                        <h3>🌍 Origin</h3>
                        <p>{character.origin?.name}</p>
                    </div>

                    <div className="location-info">
                        <h3>📍 Last Known Location</h3>
                        <p>{character.location?.name}</p>
                    </div>

                    {character.episode && (
                        <div className="episode-info">
                            <h3>📺 Episodes</h3>
                            <p>{character.episode.length} episode(s)</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}