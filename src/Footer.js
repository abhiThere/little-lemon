import Nav from "./Nav";
import Logo from "./logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon Logo" />
      <section>
        <h3>Doormat Navigation</h3>
        <Nav />
      </section>

      <section>
        <h3>Contact</h3>
        <address>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </address>
      </section>

      <section>
        <h3>Social Media Links</h3>
        <address>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </address>
      </section>
    </footer>
  );
};

export default Footer;
