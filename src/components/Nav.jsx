import { Link } from "react-router-dom";
import "../css/Nav.css";

export default function Nav() {
  return (
    <nav className="nav-bottom">
      <Link to="/feed">
        <img src="/public/images/icons/home.png" alt="" />
      </Link>
      <Link to="/new">
        <img src="/public/images/icons/newpost.png" alt="" />
      </Link>
    </nav>
  );
}
