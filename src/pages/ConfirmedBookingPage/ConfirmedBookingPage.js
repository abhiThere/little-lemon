import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

import "./ConfirmedBookingPage.css";

const ConfirmedBookingPage = () => {
  const navigate = useNavigate();

  const handleOnlineMenu = () => navigate("/menu", { replace: true });

  return (
    <div className="confirmed-booking">
      <Header />
      <main>
        <p>Your table has been reserved successfully!</p>
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
