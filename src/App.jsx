import './styles/App.scss';
import Header from './components/layout/Header';
import CharactersDetail from './components/characters/CharactersDetail';
import CharactersList from './components/characters/CharactersList';
import Filters from './components/filters/Filters';


import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error('Error:', error));
  }, []);

const filteredCharacters = characters
  .filter((char) => {
    return house === '' || char.house === house;
  })
  .filter((char) => {
    return gender === '' || char.gender === gender;
  })
  .filter((char) => {
    return char.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Header />

      <Filters
        search={search}
        setSearch={setSearch}
        house={house}
        setHouse={setHouse}
        gender={gender}          
        setGender={setGender}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
             <CharactersList
                characters={filteredCharacters}
                search={search}
              />
            </>
          }
        />
        <Route
          path="/characters/:id"
          element={<CharactersDetail characters={characters} />}
        />
      </Routes>
    </div>
  );
}

export default App;


