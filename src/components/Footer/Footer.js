import { Link } from "react-router-dom";
import AppLogo from "../AppLogo/AppLogo";
import LocationIcon from "../../assets/icons/location.png";
import PhoneIcon from "../../assets/icons/phone.png";
import EmailIcon from "../../assets/icons/email.png";
import FacebookLogo from "../../assets/icons/facebook.png";
import InstagramLogo from "../../assets/icons/instagram.png";
import XLogo from "../../assets/icons/x.png";
import LinkedInLogo from "../../assets/icons/linkedin.png";

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
                <img
                  src={LocationIcon}
                  alt="location icon"
                  className="contact-icon"
                />
                1132 W Albert Street,
                <br />
                <span id="location">Chicago, USA</span>
              </Link>
            </li>
            <li>
              <Link to="tel:+13107492683" aria-label="On Click">
                <img
                  src={PhoneIcon}
                  alt="phone icon"
                  className="contact-icon"
                />
                (310) 749-2683
              </Link>
            </li>
            <li>
              <Link to="mailto:little@lemon.com" aria-label="On Click">
                <img
                  src={EmailIcon}
                  alt="email icon"
                  className="contact-icon"
                />
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
                <img
                  src={FacebookLogo}
                  alt="facebook logo"
                  className="contact-icon"
                />
                Facebook
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                aria-label="On Click"
              >
                <img
                  src={InstagramLogo}
                  alt="instagram logo"
                  className="contact-icon"
                />
                Instagram
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/"
                target="_blank"
                aria-label="On Click"
              >
                <img src={XLogo} alt="x logo" className="contact-icon" />X
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/"
                target="_blank"
                aria-label="On Click"
              >
                <img
                  src={LinkedInLogo}
                  alt="linkedin logo"
                  className="contact-icon"
                />
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
