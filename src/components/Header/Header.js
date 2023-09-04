import AppLogo from "../AppLogo/AppLogo";
import Nav from "../Nav/Nav";

import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <AppLogo />
      <Nav />
    </header>
  );
};

export default Header;
