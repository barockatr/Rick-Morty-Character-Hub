import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav({ onSearch, logout, filter, setFilter, onLoadRandom }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/rick-morty-logo.png" alt="Rick & Morty" />
          <span className="portal-icon">🌀</span>
        </div>

        <div className="nav-links">
          <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} title="Home">
            <span className="nav-icon">🧪</span>
            <span className="nav-tooltip">Home</span>
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} title="Favorites">
            <span className="nav-icon">💚</span>
            <span className="nav-tooltip">Favorites</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} title="About">
            <span className="nav-icon">📡</span>
            <span className="nav-tooltip">About</span>
          </NavLink>
        </div>

        {/* Filtros en navbar */}
        <div className="nav-filters">
           <button
              onClick={() => setFilter('all')}
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
           >All</button>
           <button
              onClick={() => setFilter('human')}
              className={`filter-btn ${filter === 'human' ? 'active' : ''}`}
           >Humans</button>
           <button
              onClick={() => setFilter('alien')}
              className={`filter-btn ${filter === 'alien' ? 'active' : ''}`}
           >Aliens</button>
           <button onClick={onLoadRandom} className="random-btn" title="Load Random">
              🌍<span className="random-question">?</span>
           </button>
        </div>

        <div className="nav-actions">
          <SearchBar onSearch={onSearch} />
          {logout && (
            <button onClick={logout} className="logout-btn" title="Escape this dimension">
              <span className="ship-icon">🛸</span>
              <span className="ship-trail"></span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
