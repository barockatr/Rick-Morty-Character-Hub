import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/Card.jsx';
import './Cards.css';

export default function Cards({ characters, onClose, onCardClick, filter, randomCharacters }) {
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
         {filteredCharacters.length > 0 && (
            <section className="carousel-section">
               <div className="infinite-carousel">
                  <div className="carousel-track">
                     {[...filteredCharacters, ...filteredCharacters].map((character, index) => (
                        <Card
                           id={character.id}
                           key={`all-${character.id}-${index}`}
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
