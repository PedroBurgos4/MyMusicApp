import styled from "styled-components";

const NavStyled = styled.nav`
  display: grid;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 5em;
  color: #fff;
  text-shadow: 3px 4px 15px #000;
`;

const TitlePage = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
const ImgStyled = styled.img`
  filter: drop-shadow(3px 4px 5px #000);
`;

export { NavStyled, TitlePage, ImgStyled };
