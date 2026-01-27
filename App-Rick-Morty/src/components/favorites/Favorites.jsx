import { connect } from 'react-redux';
import Card from '../card/Card.jsx';
import './Favorites.css';

function Favorites({ myFavorites, onClose, onCardClick }) {
   return (
      <div className="page-container favorites-page">
         <div className="section-header favorites-header">
            <h1>❤️ My Favorites</h1>
            <p className="section-subtitle">Your favorite characters from across the multiverse</p>
         </div>

         {myFavorites.length > 0 ? (
            <div className="cards-grid">
               {myFavorites.map((character, index) => (
                  <Card
                     id={character.id}
                     key={`fav-${character.id}-${index}`}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     origin={character.origin?.name || character.origin}
                     image={character.image}
                     onClose={() => onClose(character.id)}
                     onClick={() => onCardClick(character)}
                  />
               ))}
            </div>
         ) : (
            <div className="empty-state">
               <p>💔 No favorites yet!</p>
               <p className="hint">Click the heart icon on any character card to add them here.</p>
            </div>
         )}
      </div>
   );
}

const mapStateToProps = state => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps)(Favorites);