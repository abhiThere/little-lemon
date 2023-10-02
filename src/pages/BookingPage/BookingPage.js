import { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import BookingForm from "../../components/BookingForm/BookingForm";
import Footer from "../../components/Footer/Footer";
import { SubmitContext } from "../../context/submit-context";

import { fetchAPI, submitAPI } from "../../utils/api";

import "./BookingPage.css";

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
  const { handleFormSubmission } = useContext(SubmitContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitForm = (formData) => {
    const formSubmitted = submitAPI(formData);

    if (formSubmitted) {
      handleFormSubmission(formSubmitted);
      navigate("/booking-confirmation", {replace: true});
    }
  };

  return (
    <div className="booking-page">
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
      <Footer />
    </div>
  );
};

export default BookingPage;
