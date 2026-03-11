import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import About from './components/about/About';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';
import CharacterModal from './components/characterModal/CharacterModal';
import './App.css';

function App() {

   const [characters, setCharacters] = useState([]); // [ estado, functión ]
   const [selectedCharacter, setSelectedCharacter] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const [filter, setFilter] = useState('all');
   const [randomCharacters, setRandomCharacters] = useState([]);

   const loadRandomCharacters = async () => {
      const randomIds = Array.from({ length: 12 }, () => Math.floor(Math.random() * 826) + 1);
      const promises = randomIds.map(id =>
         axios(`https://rickandmortyapi.com/api/character/${id}`).catch(() => null)
      );
      const results = await Promise.all(promises);
      setRandomCharacters(results.filter(r => r?.data).map(r => r.data));
   };

   function login(userData) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === userData.email && u.password === userData.password);

      if (user) {
         setAccess(true);
         localStorage.setItem('currentUser', JSON.stringify(user));
         navigate('/home');
      }
   }

   function logout() {
      setAccess(false);
      localStorage.removeItem('currentUser');
      navigate('/');
   }

   useEffect(() => {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
         setAccess(true);
      } else if (!access) {
         navigate('/');
      }
   }, [access, navigate]);

   useEffect(() => {
      if (access) {
         loadRandomCharacters();
      }
   }, [access]);

   const location = useLocation();
   console.log(location.pathname);

   function onSearch(searchTerm, searchType = 'id') {
      if (searchType === 'id') {
         // Search by ID (direct endpoint)
         axios(`https://rickandmortyapi.com/api/character/${searchTerm}`)
            .then(({ data }) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            })
            .catch(() => {
               window.alert('¡No se encontró el personaje!');
            });
      } else {
         // Search by other parameters (name, species, status)
         const params = new URLSearchParams();
         params.append(searchType, searchTerm);

         axios(`https://rickandmortyapi.com/api/character/?${params.toString()}`)
            .then(({ data }) => {
               if (data.results && data.results.length > 0) {
                  // Add all results, avoiding duplicates
                  const newCharacters = data.results.filter(
                     newChar => !characters.some(char => char.id === newChar.id)
                  );
                  setCharacters((oldChars) => [...oldChars, ...newCharacters]);
               } else {
                  window.alert(`¡No hay personajes con ${searchType}: ${searchTerm}!`);
               }
            })
            .catch(() => {
               window.alert('¡No se encontraron personajes!');
            });
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }
   // characters = [ {id:1}, {id:3} ]
   // id = 2

   const handleCardClick = (character) => {
      setSelectedCharacter(character);
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
      setTimeout(() => setSelectedCharacter(null), 300);
   };

   return (
      <div className='App'>
         {
            location.pathname !== "/" && (
               <Nav
                  onSearch={onSearch}
                  logout={logout}
                  filter={filter}
                  setFilter={setFilter}
                  onLoadRandom={loadRandomCharacters}
               />
            )
         }
         <Routes >
            <Route
               path="/"
               element={<Form login={login} />}
            />
            <Route
               path="/home"
               element={
                  <Cards
                     characters={characters}
                     onClose={onClose}
                     onCardClick={handleCardClick}
                     filter={filter}
                     randomCharacters={randomCharacters}
                  />
               }
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/detail/:id"
               element={<Detail />}
            />
            <Route
               path="/favorites"
               element={<Favorites onClose={onClose} onCardClick={handleCardClick} />}
            />
            <Route
               path="*"
               element={<About />}
            />
         </Routes>

         {isModalOpen && selectedCharacter && (
            <CharacterModal
               character={selectedCharacter}
               onClose={handleCloseModal}
            />
         )}

      </div>
   );
}

export default App;
