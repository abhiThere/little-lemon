import RatingStar from "../../assets/images/rating.png";
import UserMike from "../../assets/images/user-mike.jpg";
import UserJane from "../../assets/images/user-jane.jpg";
import UserJake from "../../assets/images/user-jake.jpg";
import UserSally from "../../assets/images/user-sally.jpg";

import "./CustomersSay.css";

const CustomersSay = () => {
  return (
    <section className="customers-say">
      <h1>Testimonials</h1>
      <section className="testimonials">
        <article>
          <header>
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <section className="user-details">
              <img src={UserMike} alt="User Avatar" />
              <h2>Mike</h2>
            </section>
          </header>
          <main>
            <p className="user-comment">
              Loved Little Lemon! Enjoyed tasty food with my friends.
            </p>
          </main>
        </article>
        <article>
          <header>
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <section className="user-details">
              <img src={UserJane} alt="User Avatar" />
              <h2>Jane</h2>
            </section>
          </header>
          <main>
            <p className="user-comment">
              Amazing food! I would definitely recommend Little Lemon to anyone.
            </p>
          </main>
        </article>
        <article>
          <header>
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <section className="user-details">
              <img src={UserJake} alt="User Avatar" />
              <h2>Jake</h2>
            </section>
          </header>
          <main>
            <p className="user-comment">
              The food was delicious and the ambience was good. Also, the
              service is quick.
            </p>
          </main>
        </article>
        <article>
          <header>
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <img className="user-rating" src={RatingStar} alt="Rating Star" />
            <section className="user-details">
              <img src={UserSally} alt="User Avatar" />
              <h2>Sally</h2>
            </section>
          </header>
          <main>
            <p className="user-comment">
              Awesome food and customer service. I will be going again!
            </p>
          </main>
        </article>
      </section>
    </section>
  );
};

export default CustomersSay;
