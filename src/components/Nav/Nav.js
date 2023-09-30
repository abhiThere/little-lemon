import { NavLink } from "react-router-dom";
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
          <NavLink to="/order-online" aria-label="On Click">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" aria-label="On Click">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
