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
              <Link to="/" aria-label="On Click">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" aria-label="On Click">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" aria-label="On Click">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/booking" aria-label="On Click">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order-online" aria-label="On Click">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" aria-label="On Click">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="footer-navigation">
        <h1>Contact</h1>
        <address>
          <ul>
            <li>
              <Link
                to="https://goo.gl/maps/fuYL4VJKbDpdwzXWA"
                target="_blank"
                aria-label="On Click"
              >
                1132 W Albert Street,
                <br />
                Chicago, USA
              </Link>
            </li>
            <li>
              <Link to="tel:+13107492683" aria-label="On Click">
                (310) 749-2683
              </Link>
            </li>
            <li>
              <Link to="mailto:little@lemon.com" aria-label="On Click">
                little@lemon.com
              </Link>
            </li>
          </ul>
        </address>
      </section>
      <section className="footer-navigation">
        <h1>Social Media Links</h1>
        <address>
          <ul>
            <li>
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                aria-label="On Click"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                aria-label="On Click"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/"
                target="_blank"
                aria-label="On Click"
              >
                X
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/"
                target="_blank"
                aria-label="On Click"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </address>
      </section>
    </footer>
  );
};

export default Footer;
