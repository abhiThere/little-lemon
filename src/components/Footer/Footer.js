import { Link } from "react-router-dom";
import AppLogo from "../AppLogo/AppLogo";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <section className="main-footer-logo">
        <AppLogo />
      </section>
      <section className="footer-navigation">
        <h1>Doormat Navigation</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="footer-navigation">
        <h1>Contact</h1>
        <address>
          <ul>
            <li>
              <Link to="https://goo.gl/maps/fuYL4VJKbDpdwzXWA">
                1132 W Albert Street,
                <br />
                Chicago, USA
              </Link>
            </li>
            <li>
              <Link to="tel:+13107492683">(310) 749-2683</Link>
            </li>
            <li>
              <Link to="mailto:little@lemon.com">little@lemon.com</Link>
            </li>
          </ul>
        </address>
      </section>
      <section className="footer-navigation">
        <h1>Social Media Links</h1>
        <address>
          <ul>
            <li>
              <Link to="https://www.facebook.com/">Facebook</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/">Instagram</Link>
            </li>
            <li>
              <Link to="https://twitter.com/">Twitter</Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/">LinkedIn</Link>
            </li>
          </ul>
        </address>
      </section>
    </footer>
  );
};

export default Footer;
