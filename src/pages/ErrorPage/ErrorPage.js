import { useNavigate } from "react-router-dom";
import PageNotFound from "../../assets/images/page-not-found.png";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => navigate("/", { replace: true });

  return (
    <div className="error-page">
      <section className="error-details">
        <img src={PageNotFound} alt="page not found" />
        <h1>404</h1>
        <p>Page Not Found!</p>
      </section>
      <button className="cta-btn" onClick={handleGoToHome}>
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
