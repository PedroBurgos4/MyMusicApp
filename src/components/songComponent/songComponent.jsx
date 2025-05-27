import "./songComponent.css";
const Song = (props) => {
  const { number, name, artist, album, time, type, ...functions } = props;
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
        <p>{time}</p>
      </div>
      <div>
        {type === "add" && (
          <button className="add" onClick={() => functions.addSong(props)}>
            Agregar a mi biblioteca
          </button>
        )}
        {type === "remove" && (
          <button
            className="remove"
            onClick={() => functions.removeSong(props)}
          >
            Quitar de mi biblioteca
          </button>
        )}
      </div>
    </div>
  );
};

export default Song;
