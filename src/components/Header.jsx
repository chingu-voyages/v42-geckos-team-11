import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

const Header = (props) => {
  const { auth } = props;

  const nav = !auth ? (
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-item login">
        <NavLink to="/about">Login</NavLink>
      </li>
    </ul>
  ) : (
    <div className="profile">
      <Link to="/profile">
        <img src="../images/icons/profile.jpg" alt="" />
      </Link>
    </div>
  );

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <div className="logo">FEELZ</div>
        </Link>
        <nav id="gnb">
          <h2 class="blind">gnb</h2>
          {nav}
        </nav>
      </div>
    </header>
  );
};

export default Header;
