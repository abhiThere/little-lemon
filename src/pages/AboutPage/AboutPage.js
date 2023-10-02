import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Chicago from "../../components/Chicago/Chicago";
import Footer from "../../components/Footer/Footer";

import "./AboutPage.css";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Header />
      <Chicago />
      <Footer />
    </div>
  );
};

export default AboutPage;
