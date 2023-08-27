import Nav from "./Nav";
import Logo from "./images/logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="app-logo" src={Logo} alt="Little Lemon Logo" />
      </a>
      <Nav />
    </header>
  );
};

export default Header;
