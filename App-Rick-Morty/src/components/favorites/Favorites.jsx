import { connect } from 'react-redux';
import Card from '../card/Card.jsx';
import './Favorites.css';
import '../cards/Cards.css';

function Favorites({ myFavorites, onClose, onCardClick }) {
   return (
      <div className="favorites-page">
         <section className="carousel-section">
            <div className="fav-header">
               <h2 className="wave-title">
                  {['M','y',' ','F','a','v','o','r','i','t','e','s'].map((char, i) => (
                     <span key={i} className="wave-letter" style={{ animationDelay: `${i * 0.06}s` }}>
                        {char === ' ' ? '\u00A0' : char}
                     </span>
                  ))}
               </h2>
               <p className="fav-subtitle">Your favorite characters from across the multiverse</p>
            </div>

            {myFavorites.length > 0 ? (
               <div className="infinite-carousel">
                  <div className={`carousel-track ${myFavorites.length <= 4 ? 'no-anim' : ''}`}>
                     {[...myFavorites, ...myFavorites].map((character, index) => (
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
               </div>
            ) : (
               <div className="empty-state">
                  <p>💔 No favorites yet!</p>
                  <p className="hint">Click the heart icon on any character card to add them here.</p>
               </div>
            )}
         </section>
      </div>
   );
}

const mapStateToProps = state => ({ myFavorites: state.myFavorites });
export default connect(mapStateToProps)(Favorites);