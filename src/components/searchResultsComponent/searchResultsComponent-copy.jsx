import Song from "../songComponent/songComponent";
import "./searchResultsComponent.css";
const SearchResults = (props) => {
  const { songs, searchSongs, addSong } = props;
  return (
    <div className="sectionSongs">
      <section className="searchInput">
        <input
          type="text"
          placeholder="Buscar canciones por nombre/artista/album"
          onChange={searchSongs}
        />
      </section>
      <section className="searchList">
        {songs.map((element, index) => {
          return (
            <Song
              key={element.id}
              id={element.id}
              number={index + 1}
              name={element.name}
              artist={element.artist}
              album={element.album}
              time={element.time}
              addSong={addSong}
              type="add"
            />
          );
        })}
      </section>
    </div>
  );
};

export default SearchResults;
