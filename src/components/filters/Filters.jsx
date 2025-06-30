import '../../styles/Filters/Filters.scss';


function Filters({ search, setSearch, house, setHouse, gender, setGender }) {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form className="filters" onSubmit={handleSubmit}>
      <label>
        Busca por personaje:
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Harry, Hermione..."
        />
      </label>

      <label>
        Selecciona la casa:
        <select value={house} onChange={(e) => setHouse(e.target.value)}>
          <option value="">Todas</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </label>
      
       <label>
        Selecciona el género:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Todos</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
        </select>
      </label>
    </form>
  );
}

export default Filters;