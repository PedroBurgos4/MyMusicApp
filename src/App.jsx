import { Route, Routes } from "react-router";
import Header from "./components/headerComponent/headerComponent";
import SearchBar from "./components/searchBarComponent/searchBarComponent";
import SongDetail from "./components/songDetailComponent/songDetailComponent";
// import "./App.css";
import SearchResults from "./components/searchResultsComponent/searchResultsComponent";
import { useState } from "react";
import { Theme } from "./globalStyles/Theme";
import GlobalStyles from "./globalStyles/GlobalStyles";

function App() {
  const [artist, setArtist] = useState("");

  return (
    <>
      <Theme>
        <GlobalStyles />
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
      </Theme>
    </>
  );
}

export default App;
