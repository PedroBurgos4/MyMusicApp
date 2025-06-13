// import "./searchBarComponent.css";

import { useState } from "react";
import {
  SearchBarStyled,
  SearchInput,
  SearchButton,
  Input,
} from "./SearchBarComponentStyled";
const SearchBar = (props) => {
  const [isClick, setisClick] = useState(false);
  const SearchArtists = () => {
    let artist = document.getElementById("artist").value.toLowerCase();
    setisClick(!isClick);
    props.setArtist(artist);
  };
  const searchEnter = (e) => {
    if (e.key === "Enter") {
      let artist = document.getElementById("artist").value.toLowerCase();
      props.setArtist(artist);
    }
  };

  return (
    <SearchBarStyled>
      <SearchInput>
        <Input
          type="text"
          placeholder="Buscar artista"
          id="artist"
          onKeyDown={(e) => searchEnter(e)}
        />
        <SearchButton isClicked={isClick} onClick={SearchArtists}>
          Buscar
        </SearchButton>
      </SearchInput>
    </SearchBarStyled>
  );
};
export default SearchBar;
