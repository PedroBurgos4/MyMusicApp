import Header from "./components/headerComponent/headerComponent";
import Song from "./components/songComponent/songComponent";
import { songs } from "./utils/songs";
import { useEffect } from "react";
import "./App.css";

function App() {
  //El useEffect se ejecuta cuando se carga la pagina es igual a componentDidMount de react
  useEffect(() => {
    console.log("Page loaded");
  }, []);
  return (
    <>
      <Header />
      <section className="sectionSongs">
        {songs.map((element, index) => {
          return (
            <Song
              key={index}
              number={index + 1}
              name={element.name}
              artist={element.artist}
              album={element.album}
              time={element.time}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
