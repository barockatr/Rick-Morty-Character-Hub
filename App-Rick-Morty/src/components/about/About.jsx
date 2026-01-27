import './About.css';

export default function About(props) {
    return (
        <div className="about-page">
            <div className="about-header">
                <h1>About This App</h1>
                <p className="subtitle">Your gateway to the Rick and Morty multiverse</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>🌀 What is this?</h2>
                    <p>
                        This is an interactive web application that allows you to explore characters
                        from the Rick and Morty universe. Browse through hundreds of characters,
                        save your favorites, and discover new ones from across infinite dimensions!
                    </p>
                </section>

                <section className="about-section">
                    <h2>✨ Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon">🔍</span>
                            <h3>Search Characters</h3>
                            <p>Find any character by their ID</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🎲</span>
                            <h3>Random Discovery</h3>
                            <p>Load random characters to explore</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">❤️</span>
                            <h3>Favorites</h3>
                            <p>Save your favorite characters</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🎯</span>
                            <h3>Filter by Type</h3>
                            <p>Filter humans, aliens, and more</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>🛠️ Technology Stack</h2>
                    <div className="tech-stack">
                        <span className="tech-badge">React</span>
                        <span className="tech-badge">Redux</span>
                        <span className="tech-badge">React Router</span>
                        <span className="tech-badge">Axios</span>
                        <span className="tech-badge">Vite</span>
                    </div>
                </section>

                <section className="about-section">
                    <h2>📡 API</h2>
                    <p>
                        This app uses the <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">
                            Rick and Morty API</a> to fetch character data. The API provides information
                        about characters, locations, and episodes from the show.
                    </p>
                </section>

                <section className="about-section footer-section">
                    <p>Made with 💚 for Rick and Morty fans</p>
                    <p className="version">Version 1.0.0</p>
                </section>
            </div>
        </div>
    )
}