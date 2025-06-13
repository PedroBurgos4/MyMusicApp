import styled from "styled-components";
const SongStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 25em;
  margin: 0.1em;
  & div {
    margin: 0.5em;
    font-size: 0.7em;
  }
`;

const AddStyled = styled.button`
  background-color: ${(props) => props.theme.colors.primaryButton};
  color: #fff;
  border: none;
  border-radius: 1.2em;
  font-size: 0.6em;
  padding: 0.5em;
  width: 8em;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryButton};
  }
`;

export { SongStyled, AddStyled };
