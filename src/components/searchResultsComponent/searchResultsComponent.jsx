import Song from "../songComponent/songComponent";
import "./searchResultsComponent.css";
import useFetch from "../../hooks/useFetch";
const SearchResults = (props) => {
  const { artist } = props;
  console.log(artist);
  let album = useFetch(
    `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artist}`
  );
  console.log("en el componente");

  console.log(album);

  return (
    <div className="sectionSongs">
      {album.loading === true && <p>Cargando...</p>}
      {album.error !== null && <p>{album.error}</p>}

      <section className="searchList">
        {album.data !== null &&
          album.data.album.map((element, index) => {
            return (
              <Song
                key={index}
                id={element.idAlbum}
                number={index + 1}
                name={element.strAlbum}
                artist={element.strArtist}
                album={element.strAlbum}
              />
            );
          })}
      </section>
    </div>
  );
};

export default SearchResults;
