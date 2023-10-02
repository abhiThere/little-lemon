import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Specials from "../../components/Specials/Specials";
import Footer from "../../components/Footer/Footer";

import "./MenuPage.css";

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="menu-page">
      <Header />
      <Specials />
      <Footer />
    </div>
  );
};

export default MenuPage;
