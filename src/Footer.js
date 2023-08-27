import Logo from "./images/logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <a href="/">
        <img className="app-logo" src={Logo} alt="Little Lemon Logo" />
      </a>
      <section className="footer-navigation">
        <h1>Doormat Navigation</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="footer-navigation">
        <h1>Contact</h1>
        <address>
          <ul>
            <li>
              <a href="https://goo.gl/maps/fuYL4VJKbDpdwzXWA">
                1132 W Albert Street,
                <br />
                Chicago, USA
              </a>
            </li>
            <li>
              <a href="tel:+13107492683">(310) 749-2683</a>
            </li>
            <li>
              <a href="mailto:little@lemon.com">little@lemon.com</a>
            </li>
          </ul>
        </address>
      </section>
      <section className="footer-navigation">
        <h1>Social Media Links</h1>
        <address>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </address>
      </section>
    </footer>
  );
};

export default Footer;
