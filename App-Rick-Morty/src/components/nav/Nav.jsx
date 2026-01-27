import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav({ onSearch, logout }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Rick & Morty</h2>
          <span className="portal-icon">🌀</span>
        </div>

        <div className="nav-links">
          <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Favorites
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
        </div>

        <div className="nav-actions">
          <SearchBar onSearch={onSearch} />
          {logout && (
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
