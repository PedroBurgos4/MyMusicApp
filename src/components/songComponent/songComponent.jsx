// import "./songComponent.css";
import { Link } from "react-router";
import { SongStyled, AddStyled } from "./SongComponentStyled";
const Song = (props) => {
  const { number, name, artist, album, id } = props;
  return (
    <SongStyled>
      <div>
        <p>{number}</p>
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{artist}</p>
      </div>
      <div>
        <p>{album}</p>
      </div>

      <div>
        <Link to={`/song/${id}`}>
          <AddStyled>Ver detalles</AddStyled>
        </Link>
      </div>
    </SongStyled>
  );
};

export default Song;
