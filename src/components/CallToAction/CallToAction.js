import { useNavigate } from "react-router-dom";
import RestaurantFood from "../../assets/images/restaurant-food.jpg";

import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleTableReservation = () => navigate("/booking");

  return (
    <section className="cta">
      <section className="cta-content">
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
        <footer>
          <button
            className="cta-btn"
            aria-label="On Click"
            onClick={handleTableReservation}
          >
            Reserve a table
          </button>
        </footer>
      </section>
      <section>
        <img className="cta-img" src={RestaurantFood} alt="Restaurant Food" />
      </section>
    </section>
  );
};

export default CallToAction;
