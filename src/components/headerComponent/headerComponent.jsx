import songIcon from "../../assets/songIcon.svg";
import "./headerComponent.css";
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="titlePage">
          <img src={songIcon} alt="My Music App" />
          <h1>My Music App</h1>
        </div>
      </nav>
    </header>
  );
};
export default Header;
