import './About.css';

export default function About() {
    return (
        <div className="about-page">
            <div className="about-header">
                <h1 className="about-title">
                    {'Rick & Morty Character Hub'.split('').map((char, i) => (
                        <span key={i} className="wave-letter" style={{ animationDelay: `${i * 0.05}s` }}>
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>
                <p className="about-subtitle">Your gateway to the Rick and Morty multiverse</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>🌀 What is this?</h2>
                    <p>
                        An interactive web app to explore characters from the Rick and Morty universe.
                        Browse hundreds of characters, save your favorites, and discover new ones
                        from across infinite dimensions.
                    </p>
                </section>

                <section className="about-section">
                    <h2>✨ Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon">🔍</span>
                            <h3>Search</h3>
                            <p>Find characters by name, ID or species</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🎲</span>
                            <h3>Random</h3>
                            <p>Discover random characters from the multiverse</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">💚</span>
                            <h3>Favorites</h3>
                            <p>Save your favorite characters across sessions</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">👽</span>
                            <h3>Filter</h3>
                            <p>Browse humans, aliens or all characters</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}