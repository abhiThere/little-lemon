import RestaurantFood from "./images/restaurant-food.jpg";
import GreekSalad from "./images/greek-salad.jpg";
import Bruschetta from "./images/bruschetta.jpg";
import LemonDessert from "./images/lemon-dessert.jpg";
import UserMike from "./images/user-mike.jpg";
import UserJane from "./images/user-jane.jpg";
import UserJake from "./images/user-jake.jpg";
import UserSally from "./images/user-sally.jpg";
import MarioAdrian1 from "./images/mario-and-adrian-1.jpg";
import MarioAdrian2 from "./images/mario-and-adrian-2.jpg";
import DeliveryScooter from "./images/delivery-scooter.svg";
import RatingStar from "./images/rating.png";

import "./Main.css";

const Main = () => {
  return (
    <main>
      <section className="hero">
        <section className="hero-content">
          <header>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </header>
          <main>
            <p>
              We are a family owned
              <br />
              Mediterranean restaurant,
              <br />
              focused on traditional
              <br />
              recipes served with a modern
              <br />
              twist.
            </p>
          </main>
          <footer className="cta">
            <button className="cta-btn">Reserve a table</button>
          </footer>
        </section>
        <section className="hero-img">
          <img src={RestaurantFood} alt="Restaurant Food" />
        </section>
      </section>
      <section className="highlights">
        <header>
          <h1>This weeks specials!</h1>
          <button className="cta-btn">Online Menu</button>
        </header>
        <main className="specials">
          <article>
            <header>
              <img src={GreekSalad} alt="Greek Salad" />
              <div className="specials-title">
                <h1>Greek Salad</h1>
                <span>$ 12.99</span>
              </div>
            </header>
            <main className="specials-description">
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </main>
            <footer className="order-for-delivery">
              <a href="/order-online">
                Order a delivery
                <img src={DeliveryScooter} alt="Delivery Scooter" />
              </a>
            </footer>
          </article>
          <article>
            <header>
              <img src={Bruschetta} alt="Bruschetta" />
              <div className="specials-title">
                <h1>Bruschetta</h1>
                <span>$ 5.99</span>
              </div>
            </header>
            <main className="specials-description">
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
            </main>
            <footer className="order-for-delivery">
              <a href="/order-online">
                Order a delivery
                <img src={DeliveryScooter} alt="Delivery Scooter" />
              </a>
            </footer>
          </article>
          <article>
            <header>
              <img src={LemonDessert} alt="Lemon Dessert" />
              <div className="specials-title">
                <h1>Lemon Dessert</h1>
                <span>$ 5.00</span>
              </div>
            </header>
            <main className="specials-description">
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
            </main>
            <footer className="order-for-delivery">
              <a href="/order-online">
                Order a delivery
                <img src={DeliveryScooter} alt="Delivery Scooter" />
              </a>
            </footer>
          </article>
        </main>
      </section>
      <section className="testimonials">
        <h1>Testimonials</h1>
        <section className="testimonial-cards">
          <article>
            <header>
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <section className="user-details">
                <img src={UserMike} alt="User Avatar" />
                <h2>Mike</h2>
              </section>
            </header>
            <main>
              <p className="comment">
                Loved Little Lemon! Enjoyed tasty food with my friends.
              </p>
            </main>
          </article>
          <article>
            <header>
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <section className="user-details">
                <img src={UserJane} alt="User Avatar" />
                <h2>Jane</h2>
              </section>
            </header>
            <main>
              <p className="comment">
                Amazing food! I would definitely recommend Little Lemon to
                anyone.
              </p>
            </main>
          </article>
          <article>
            <header>
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <section className="user-details">
                <img src={UserJake} alt="User Avatar" />
                <h2>Jake</h2>
              </section>
            </header>
            <main>
              <p className="comment">
                The food was delicious and the ambience was good. Also, the
                service is quick.
              </p>
            </main>
          </article>
          <article>
            <header>
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <img className="rating-star" src={RatingStar} alt="Rating Star" />
              <section className="user-details">
                <img src={UserSally} alt="User Avatar" />
                <h2>Sally</h2>
              </section>
            </header>
            <main>
              <p className="comment">
                Awesome food and customer service. I will be going again!
              </p>
            </main>
          </article>
        </section>
      </section>
      <section className="about">
        <section>
          <header>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </header>
          <main>
            <p>
              Little Lemon is a charming neighbourhood bistro that serves simple
              food and classic cocktails in a lively but casual environment.
            </p>
            <br />
            <p>
              The restaurant features a locally-sourced menu with daily
              specials.
            </p>
          </main>
        </section>
        <section className="mario-adrian">
          <img
            className="mario-adrian-1"
            src={MarioAdrian1}
            alt="Mario and Adrian discussing a recipe"
          />
          <img
            className="mario-adrian-2"
            src={MarioAdrian2}
            alt="Mario and Adrian happily see the dish"
          />
        </section>
      </section>
    </main>
  );
};

export default Main;
