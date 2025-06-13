import styled from "styled-components";

const SearchBarStyled = styled.section`
  display: grid;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin-bottom: 0.5em;
`;
const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 1em;
`;

const SearchButton = styled.button`
  border-radius: 0.3em;
  margin-left: 0.5em;
  background-color: ${(props) => (props.isClicked ? " #51F57F" : "#f65253")};
  color: #fff;
  border: 0;
  padding: 0.2em;
  &:hover {
    background-color: ${(props) => (props.isClicked ? " #6AA079" : "#d04242")};
  }
`;
const Input = styled.input`
  outline: none;
`;

export { SearchBarStyled, SearchInput, SearchButton, Input };
