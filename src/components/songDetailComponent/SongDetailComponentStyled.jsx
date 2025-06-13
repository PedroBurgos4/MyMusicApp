import styled from "styled-components";

const SectionAlbumDetail = styled.div`
  margin-top: 0.5em;
  padding: 1em;
`;
const BackButton = styled.button`
  border-radius: 0.3em;
  margin-left: 0.5em;
  background-color: #f65253;
  color: #fff;
  border: 0;
  padding: 0.2em;
  &:hover {
    background-color: #d04242;
  }
`;
const AlbumDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: justify;
`;

export { SectionAlbumDetail, BackButton, AlbumDetail };
