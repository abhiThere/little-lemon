import Nav from "./Nav";
import Logo from "./logo.png";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
};

export default Header;
