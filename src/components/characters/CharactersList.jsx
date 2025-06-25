import React from 'react';
import CharactersCard from './CharactersCard';
import '../../styles/Characters/CharactersList.scss';

function CharactersList({ characters, search }) {
  if (characters.length === 0) {
    return (
      <p className="no-results">
        No hay ningún personaje que coincida con la palabra "{search}"
      </p>
    );
  }

  return (
    <div className="characters-list">
      {characters.map((character) => (
        <CharactersCard key={character.id || character.name} character={character} />
      ))}
    </div>
  );
}

export default CharactersList;