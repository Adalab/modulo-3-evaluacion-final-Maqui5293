import '../../styles/characters/CharactersCard.scss';
import { Link } from 'react-router-dom';


function CharactersCard({ character }) {
  return (
    <div className="card">
      <Link to={`/characters/${character.name.replace(/ /g, '_')}`}>
        <img src={character.image} alt={character.name} />
        <div className="card-info">
          <h2>{character.name}</h2>
          <p>{character.species}</p>
        </div>
      </Link>
    </div>
  );
}

export default CharactersCard;