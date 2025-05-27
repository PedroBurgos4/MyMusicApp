import Song from "../songComponent/songComponent";
import "./libraryComponent.css";
const Library = (props) => {
  const { songList, removeSong } = props;
  return (
    <div className="sectionSongs">
      <section className="titleList">
        <h3>Mi biblioteca</h3>
      </section>
      <section className="songList">
        {songList.length > 0 &&
          songList.map((element, index) => {
            return (
              <Song
                key={index}
                number={index + 1}
                id={element.id}
                name={element.name}
                artist={element.artist}
                album={element.album}
                time={element.time}
                type="remove"
                removeSong={removeSong}
              />
            );
          })}
      </section>
    </div>
  );
};

export default Library;
