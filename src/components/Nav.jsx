import { NavLink } from "react-router-dom";
import "../css/Nav.css";

export default function Nav() {
  return (
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink to="/feed">
          <img src="/public/images/icons/home.png" alt="" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/new">
          <img src="/public/images/icons/newpost.png" alt="" />
        </NavLink>
      </li>
    </ul>
  );
}
