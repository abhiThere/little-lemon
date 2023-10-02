import { useContext } from "react";
import { SubmitContext } from "./context/submit-context";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage/ConfirmedBookingPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import "./App.css";

function App() {
  const { isFormSubmitted } = useContext(SubmitContext);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        {isFormSubmitted && (
          <Route
            path="/booking-confirmation"
            element={<ConfirmedBookingPage />}
          ></Route>
        )}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
