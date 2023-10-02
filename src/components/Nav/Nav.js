import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink to="/" aria-label="On Click">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" aria-label="On Click">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" aria-label="On Click">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" aria-label="On Click">
            Reservations
          </NavLink>
        </li>
        <li>
          <Link to="/" aria-label="On Click">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/" aria-label="On Click">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
