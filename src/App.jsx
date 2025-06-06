import { Route, Routes } from "react-router";
import Header from "./components/headerComponent/headerComponent";
import SearchBar from "./components/searchBarComponent/searchBarComponent";
import SongDetail from "./components/songDetailComponent/songDetailComponent";
import "./App.css";
import SearchResults from "./components/searchResultsComponent/searchResultsComponent";
import { useState } from "react";

function App() {
  const [artist, setArtist] = useState("");

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchBar setArtist={setArtist} />
              {artist !== "" && <SearchResults artist={artist} />}
            </div>
          }
        />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>
    </>
  );
}

export default App;
