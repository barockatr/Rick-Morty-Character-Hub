import { useNavigate } from 'react-router-dom';
import './FilterFAB.css';

export default function FilterFAB({ filter, setFilter, onLoadRandom, logout }) {
   const navigate = useNavigate();

   return (
      <div className="fab-container">
         <div className="fab-options">
            <button onClick={() => setFilter('all')} className={`fab-option ${filter === 'all' ? 'active' : ''}`}>
               🌌 <span>ALL</span>
            </button>
            <button onClick={() => setFilter('human')} className={`fab-option ${filter === 'human' ? 'active' : ''}`}>
               🧑 <span>HUMANS</span>
            </button>
            <button onClick={() => setFilter('alien')} className={`fab-option ${filter === 'alien' ? 'active' : ''}`}>
               👽 <span>ALIENS</span>
            </button>
            <button onClick={onLoadRandom} className="fab-option fab-random">
               🌍 <span>RANDOM</span>
            </button>
            <div className="fab-divider" />
            <button onClick={() => navigate('/favorites')} className="fab-option fab-nav">
               💚 <span>FAVORITES</span>
            </button>
            <button onClick={() => navigate('/about')} className="fab-option fab-nav">
               📡 <span>ABOUT</span>
            </button>
            <div className="fab-divider" />
            <button onClick={logout} className="fab-option fab-logout">
               🌀 <span>ESCAPE</span>
            </button>
         </div>
         <div className="fab-trigger">
            <span className="fab-trigger-icon">⚗️</span>
         </div>
      </div>
   );
}
