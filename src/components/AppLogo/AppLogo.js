import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";

import "./AppLogo.css";

const AppLogo = () => {
  return (
    <Link to="/" aria-label="On Click">
      <img className="app-logo" src={Logo} alt="Little Lemon Logo" />
    </Link>
  );
};

export default AppLogo;
