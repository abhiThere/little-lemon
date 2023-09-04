import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import OrderOnlinePage from "./pages/OrderOnlinePage/OrderOnlinePage";
import LoginPage from "./pages/LoginPage/LoginPage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/order-online" element={<OrderOnlinePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
