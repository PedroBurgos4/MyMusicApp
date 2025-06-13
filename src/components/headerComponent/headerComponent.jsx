import songIcon from "../../assets/songIcon.svg";
// import "./headerComponent.css";
import { NavStyled, TitlePage, ImgStyled } from "./headerComponentStyled";
const Header = () => {
  return (
    <header>
      <NavStyled>
        <TitlePage>
          <ImgStyled src={songIcon} alt="My Music App" />
          <h1>My Music App</h1>
        </TitlePage>
      </NavStyled>
    </header>
  );
};
export default Header;
