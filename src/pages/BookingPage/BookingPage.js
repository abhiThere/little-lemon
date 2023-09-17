import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import BookingForm from "../../components/BookingForm/BookingForm";
import Footer from "../../components/Footer/Footer";

import { fetchAPI, submitAPI } from "../../utils/api";

export const initializeTimes = () => {
  const availableTimes = fetchAPI(new Date());
  return availableTimes;
};

export const updateTimes = (state, action) => {
  if (action.type === "date_change") {
    return fetchAPI(new Date(action.payload));
  }

  return state;
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/booking-confirmation");
    }
  };

  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      <Footer />
    </>
  );
};

export default BookingPage;
