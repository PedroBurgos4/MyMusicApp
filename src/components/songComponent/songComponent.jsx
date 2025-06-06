import "./songComponent.css";
import { Link } from "react-router";
const Song = (props) => {
  const { number, name, artist, album, id } = props;
  return (
    <div className="song">
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
          <button className="add">Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Song;
