import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/Card.jsx';
import './Cards.css';

export default function Cards({ characters, onClose, onCardClick }) {
   const [filter, setFilter] = useState('all');
   const [randomCharacters, setRandomCharacters] = useState([]);

   useEffect(() => {
      loadRandomCharacters();
   }, []);

   const loadRandomCharacters = async () => {
      const randomIds = Array.from({ length: 12 }, () => Math.floor(Math.random() * 826) + 1);
      const promises = randomIds.map(id =>
         axios(`https://rickandmortyapi.com/api/character/${id}`).catch(() => null)
      );
      const results = await Promise.all(promises);
      setRandomCharacters(results.filter(r => r?.data).map(r => r.data));
   };

   const allCharacters = [...characters, ...randomCharacters];
   const uniqueCharacters = allCharacters.filter((char, index, self) =>
      index === self.findIndex(c => c.id === char.id)
   );

   const filteredCharacters = filter === 'all'
      ? uniqueCharacters
      : uniqueCharacters.filter(char =>
         filter === 'human' ? char.species === 'Human' : char.species !== 'Human'
      );

   const humanCharacters = uniqueCharacters.filter(c => c.species === 'Human').slice(0, 6);
   const alienCharacters = uniqueCharacters.filter(c => c.species !== 'Human').slice(0, 6);

   return (
      <div className="page-container cards-page">
         <div className="section-header cards-header">
            <h1>Character Gallery</h1>
            <p className="section-subtitle">Explore the multiverse of Rick and Morty</p>

            <div className="controls">
               <div className="filter-buttons">
                  <button
                     onClick={() => setFilter('all')}
                     className={filter === 'all' ? 'active' : ''}
                  >
                     All
                  </button>
                  <button
                     onClick={() => setFilter('human')}
                     className={filter === 'human' ? 'active' : ''}
                  >
                     Humans
                  </button>
                  <button
                     onClick={() => setFilter('alien')}
                     className={filter === 'alien' ? 'active' : ''}
                  >
                     Aliens
                  </button>
               </div>
               <button onClick={loadRandomCharacters} className="load-btn">
                  🎲 Load Random
               </button>
            </div>
         </div>

         {filteredCharacters.length > 0 && (
            <section className="cards-section">
               <h2>All Characters</h2>
               <div className="cards-grid">
                  {filteredCharacters.map((character, index) => (
                     <Card
                        id={character.id}
                        key={`${character.id}-${index}`}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin.name}
                        image={character.image}
                        onClose={() => onClose(character.id)}
                        onClick={() => onCardClick(character)}
                     />
                  ))}
               </div>
            </section>
         )}

         {humanCharacters.length > 0 && (
            <section className="carousel-section">
               <h2>🧑 Human Characters</h2>
               <div className="infinite-carousel">
                  <div className="carousel-track">
                     {[...humanCharacters, ...humanCharacters].map((character, index) => (
                        <Card
                           id={character.id}
                           key={`human-${character.id}-${index}`}
                           name={character.name}
                           status={character.status}
                           species={character.species}
                           gender={character.gender}
                           origin={character.origin.name}
                           image={character.image}
                           onClose={() => onClose(character.id)}
                           onClick={() => onCardClick(character)}
                        />
                     ))}
                  </div>
               </div>
            </section>
         )}

         {alienCharacters.length > 0 && (
            <section className="carousel-section">
               <h2>👽 Alien Characters</h2>
               <div className="infinite-carousel">
                  <div className="carousel-track carousel-reverse">
                     {[...alienCharacters, ...alienCharacters].map((character, index) => (
                        <Card
                           id={character.id}
                           key={`alien-${character.id}-${index}`}
                           name={character.name}
                           status={character.status}
                           species={character.species}
                           gender={character.gender}
                           origin={character.origin.name}
                           image={character.image}
                           onClose={() => onClose(character.id)}
                           onClick={() => onCardClick(character)}
                        />
                     ))}
                  </div>
               </div>
            </section>
         )}

         {filteredCharacters.length === 0 && (
            <div className="empty-state">
               <p>🌀 No characters found. Use the search bar to add some!</p>
            </div>
         )}
      </div>
   );
}
