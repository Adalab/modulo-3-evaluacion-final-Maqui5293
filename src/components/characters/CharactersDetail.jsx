import { useParams, Link } from 'react-router-dom';
import '../../styles/Characters/CharactersDetail.scss';


function CharactersDetail({ characters }) {
  const { id } = useParams();
  const characterId = id.replaceAll('_', ' ');

  const character = characters.find(
    (char) => char.name === characterId
  );

  if (!character) {
    return (
      <div>
        <p>Personaje no encontrado.</p>
        <Link to="/">Volver al listado</Link>
      </div>
    );
  }

  return (
    <div className="detail">
      <img src={character.image} alt={character.name} />
      <div className="detail-info">
        <h2>{character.name}</h2>
        <p><strong>Casa:</strong> {character.house || 'Sin casa'}</p>
        <p><strong>Estado:</strong> {character.alive ? 'Vivo' : 'Muerto'}</p>
        <p><strong>Género:</strong> {character.gender}</p>
        <p><strong>Especie:</strong> {character.species}</p>
        <p>
          <strong>Nombre alternativo:</strong>{' '}
          {character.alternate_names.length > 0
            ? character.alternate_names.join(', ')
            : 'Ninguno'}
        </p>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}

export default CharactersDetail;