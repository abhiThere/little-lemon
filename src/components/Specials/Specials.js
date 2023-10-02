import GreekSalad from "../../assets/images/greek-salad.jpg";
import Bruschetta from "../../assets/images/bruschetta.jpg";
import LemonDessert from "../../assets/images/lemon-dessert.jpg";
import DeliveryScooter from "../../assets/icons/delivery-scooter.svg";
import Tray from "../../assets/icons/tray.png";

import { Link, useNavigate } from "react-router-dom";

import "./Specials.css";

const Specials = () => {
  const navigate = useNavigate();

  const handleOnlineMenu = () => navigate("/menu");

  return (
    <section className="specials">
      <header>
        <img src={Tray} alt="tray" className="tray" />
        <h1>This week's specials!</h1>
        <img src={Tray} alt="tray" className="tray" />
        <button
          className="cta-btn"
          aria-label="On Click"
          onClick={handleOnlineMenu}
        >
          Online Menu
        </button>
      </header>
      <main className="week-specials">
        <article>
          <header>
            <img src={GreekSalad} alt="Greek Salad" />
            <section className="week-specials-title">
              <h1>Greek Salad</h1>
              <span>$ 12.99</span>
            </section>
          </header>
          <main className="week-specials-description">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </main>
          <footer className="order-for-delivery">
            <Link to="/" aria-label="On Click">
              Order a delivery
              <img src={DeliveryScooter} alt="Delivery Scooter" />
            </Link>
          </footer>
        </article>
        <article>
          <header>
            <img src={Bruschetta} alt="Bruschetta" />
            <section className="week-specials-title">
              <h1>Bruschetta</h1>
              <span>$ 5.99</span>
            </section>
          </header>
          <main className="week-specials-description">
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
          </main>
          <footer className="order-for-delivery">
            <Link to="/" aria-label="On Click">
              Order a delivery
              <img src={DeliveryScooter} alt="Delivery Scooter" />
            </Link>
          </footer>
        </article>
        <article>
          <header>
            <img src={LemonDessert} alt="Lemon Dessert" />
            <section className="week-specials-title">
              <h1>Lemon Dessert</h1>
              <span>$ 5.00</span>
            </section>
          </header>
          <main className="week-specials-description">
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
          </main>
          <footer className="order-for-delivery">
            <Link to="/" aria-label="On Click">
              Order a delivery
              <img src={DeliveryScooter} alt="Delivery Scooter" />
            </Link>
          </footer>
        </article>
      </main>
    </section>
  );
};

export default Specials;
