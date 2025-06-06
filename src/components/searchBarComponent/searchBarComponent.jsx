import "./searchBarComponent.css";
const SearchBar = (props) => {
  const SearchArtists = () => {
    let artist = document.getElementById("artist").value.toLowerCase();
    props.setArtist(artist);
  };
  const searchEnter = (e) => {
    if (e.key === "Enter") {
      let artist = document.getElementById("artist").value.toLowerCase();
      props.setArtist(artist);
    }
  };

  return (
    <section className="searchBar">
      <div className="searchInput">
        <input
          type="text"
          placeholder="Buscar artista"
          id="artist"
          onKeyDown={(e) => searchEnter(e)}
        />
        <button className="searchButton" onClick={SearchArtists}>
          Buscar
        </button>
      </div>
    </section>
  );
};
export default SearchBar;
