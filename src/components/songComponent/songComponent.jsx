import "./songComponent.css";
const Song = (props) => {
  const { number, name, artist, album, time } = props;
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
    </div>
  );
};

export default Song;
