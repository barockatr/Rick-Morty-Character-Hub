import { useRef, useEffect, useState } from 'react';
import Card from '../card/Card.jsx';
import FilterFAB from '../filterFAB/FilterFAB.jsx';
import './Cards.css';

function WaveTitle({ text }) {
   return (
      <h2 className="wave-title">
         {text.split('').map((char, i) => (
            <span key={i} className="wave-letter" style={{ animationDelay: `${i * 0.06}s` }}>
               {char === ' ' ? '\u00A0' : char}
            </span>
         ))}
      </h2>
   );
}

export default function Cards({ characters, onClose, onCardClick, filter, randomCharacters, setFilter, onLoadRandom, logout }) {
   const firstSectionRef = useRef(null);
   const [showFAB, setShowFAB] = useState(true);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => setShowFAB(entry.isIntersecting),
         { threshold: 0.1 }
      );
      if (firstSectionRef.current) observer.observe(firstSectionRef.current);
      return () => observer.disconnect();
   }, []);

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
      <div className="cards-page">
         {filteredCharacters.length > 0 && (
            <section className="carousel-section" ref={firstSectionRef}>
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
               {showFAB && (
                  <FilterFAB
                     filter={filter}
                     setFilter={setFilter}
                     onLoadRandom={onLoadRandom}
                     logout={logout}
                  />
               )}
            </section>
         )}

         {humanCharacters.length > 0 && (
            <section className="carousel-section">
               <WaveTitle text="Human Characters" />
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
               <WaveTitle text="Alien Characters" />
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
