import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tick from "../../assets/animation/tick.mp4";

import "./ConfirmedBookingPage.css";

const ConfirmedBookingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnlineMenu = () => navigate("/menu", { replace: true });

  return (
    <div className="confirmed-booking">
      <Header />
      <main>
        <section className="submission-feedback">
          <video
            src={Tick}
            alt="successful submission tick"
            width={200}
            height={200}
            autoPlay
          />
          <p>Your table has been reserved successfully!</p>
        </section>
        <button
          className="cta-btn"
          aria-label="On Click"
          onClick={handleOnlineMenu}
        >
          View Online Menu
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default ConfirmedBookingPage;
