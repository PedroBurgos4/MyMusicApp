import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router";
import "./songDetailComponent.css";
const SongDetail = () => {
  let idalbum = useParams();
  let album = useFetch(
    `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${idalbum.id}`
  );
  console.log("en el componente");

  console.log(album);
  return (
    <div className="sectionAlbumDetail">
      <Link to="/">
        <button className="searchButton">Volver</button>
      </Link>
      {album.loading === true && <p>Cargando...</p>}
      {album.error !== null && <p>{album.error}</p>}
      {album.data !== null &&
        album.data.album.map((element, index) => {
          return (
            <div key={index} className="albumDetail">
              <div>
                <img src={element.strAlbumThumb} alt={element.strAlbum} />
              </div>
              <div>
                <h2>
                  <b>Album: </b>
                  {element.strAlbum}
                </h2>
              </div>
              <div>
                <p>
                  <b>Artista: </b>
                  {element.strArtist}
                </p>
              </div>
              <div>
                <p>
                  {element.strDescriptionES !== null
                    ? element.strDescriptionES
                    : "Sin información"}
                </p>
              </div>
              <div>
                <p>
                  <b>Año de salida:</b> {element.intYearReleased}
                </p>
              </div>
              <div>
                <p>
                  <b>Genero:</b>
                  {element.strGenre}
                </p>
              </div>
            </div>
          );
        })}
      {album.data !== null && (
        <Link to="/">
          <button className="searchButton">Volver</button>
        </Link>
      )}
    </div>
  );
};

export default SongDetail;
