import { Link } from "react-router-dom";
import "./css/Header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <div className="logo">FEELZ</div>
        </Link>
        <nav id="gnb">
          <h2 className="blind">gnb</h2>
          <Nav />
        </nav>
      </div>
    </header>
  );
};

export default Header;
