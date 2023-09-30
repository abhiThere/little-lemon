import Header from "../../components/Header/Header";
import Specials from "../../components/Specials/Specials";
import Footer from "../../components/Footer/Footer";

import './MenuPage.css'

const MenuPage = () => {
  return (
    <div className="menu-page">
      <Header />
      <Specials />
      <Footer />
    </div>
  );
};

export default MenuPage;
