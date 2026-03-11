import SearchBar from "../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav({ onSearch }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => navigate('/home')} title="Home">
          <img src="/rick-morty-logo.png" alt="Rick & Morty" className="logo-img" />
          <span className="ship-deco">🛸</span>
        </div>
        <div className="nav-actions">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}
