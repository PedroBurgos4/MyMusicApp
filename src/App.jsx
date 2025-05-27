import Header from "./components/headerComponent/headerComponent";
import SearchResults from "./components/searchResultsComponent/searchResultsComponent";
import Library from "./components/libraryComponent/libraryComponent";
import { songs } from "./utils/songs";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [songsState, setSongs] = useState(songs);
  const [songList, setSongList] = useState([]);
  const searchSongs = (e) => {
    let search = e.target.value.toLowerCase();
    let filteredSongs = songs.filter((element) => {
      return (
        element.name.toLowerCase().includes(search) ||
        element.artist.toLowerCase().includes(search) ||
        element.album.toLowerCase().includes(search)
      );
    });
    setSongs(filteredSongs);
  };
  const addSong = (song) => {
    let newSongList = JSON.parse(JSON.stringify(songList));
    let exist = 0;
    songList.forEach((element) => {
      if (element.id === song.id) {
        exist = 1;
      }
    });
    if (exist === 0) {
      newSongList.push(song);
      setSongList(newSongList);
    }
  };
  const removeSong = (song) => {
    let newSongList = JSON.parse(JSON.stringify(songList));
    let changeList = newSongList.filter((element) => element.id !== song.id);
    setSongList(changeList);
  };
  //El useEffect se ejecuta cuando se carga la pagina es igual a componentDidMount de react
  useEffect(() => {
    console.log("Page loaded");
  }, []);

  useEffect(() => {
    console.log("Song list updated");
  }, [songList]);

  return (
    <>
      <Header />
      <section>
        <SearchResults
          songs={songsState}
          searchSongs={searchSongs}
          addSong={addSong}
        />
      </section>
      <hr />
      <section>
        <Library songList={songList} removeSong={removeSong} />
      </section>
    </>
  );
}

export default App;
