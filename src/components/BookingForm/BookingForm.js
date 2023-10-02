import { useState } from "react";
import Bookings from "./Bookings/Bookings";
import Restaurant from "../../assets/images/restaurant.jpg";
import SeasoningDish from "../../assets/images/seasoning-dish.jpg";
import WarningIcon from "../../assets/icons/warning.png";
import AsteriskIcon from "../../assets/icons/asterisk.png";

import "./BookingForm.css";

export const getInitialDate = () => {
  const initialDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedDate = initialDate.split("/").reverse().join("-");
  return formattedDate;
};

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState({
    value: getInitialDate(),
    isValid: true,
  });

  const [time, setTime] = useState("17:00");

  const [guests, setGuests] = useState({
    value: "1",
    isValid: true,
  });

  const [occasion, setOccasion] = useState("Birthday");

  const isFormValid = date.isValid && guests.isValid;

  const validateDateInput = (selectedDate) => {
    if (!selectedDate) {
      setDate({ value: "", isValid: false });
      return false;
    }

    return true;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    const isValidDate = validateDateInput(selectedDate);

    if (isValidDate) {
      setDate({
        value: selectedDate,
        isValid: true,
      });
      dispatch({ type: "date_change", payload: selectedDate });
    }
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const validateGuestsInput = (enteredGuests) => {
    if (!enteredGuests) {
      setGuests({ value: "", isValid: false });
      return false;
    }

    if (+enteredGuests < 1 || +enteredGuests > 10) {
      setGuests({ value: enteredGuests, isValid: false });
      return false;
    }

    return true;
  };

  const handleGuestsChange = (e) => {
    const enteredGuests = e.target.value;

    const isValidGuests = validateGuestsInput(enteredGuests);

    if (isValidGuests) setGuests({ value: enteredGuests, isValid: true });
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const formData = {
      date: date.value,
      time: time,
      guests: guests.value,
      occasion: occasion,
    };

    submitForm(formData);
  };

  return (
    <section className="booking-form">
      <header>
        <h1>Book a table</h1>
        <p>Find a table for any occasion</p>
        <section className="restaurant-images">
          <img src={Restaurant} alt="restaurant ambience" />
          <img src={SeasoningDish} alt="adrian seasoning a dish" />
        </section>
      </header>
      <main>
        <div className="required-fields">
          <em>
            <img src={AsteriskIcon} alt="asterisk icon" id="asterisk" />indicates required fields.
          </em>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="res-date">
              Choose date
              <img
                src={AsteriskIcon}
                alt="asterisk icon"
                className="asterisk-icon"
              />
            </label>
            <input
              type="date"
              id="res-date"
              name="res-date"
              value={date.value}
              onChange={handleDateChange}
              required
            />
            {!date.isValid && (
              <div className="warning">
                <img src={WarningIcon} alt="warning icon" />
                <p className="error">Please select a date.</p>
              </div>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="res-time">
              Choose time
              <img
                src={AsteriskIcon}
                alt="asterisk icon"
                className="asterisk-icon"
              />
            </label>
            <select
              id="res-time"
              name="res-time"
              value={time}
              onChange={handleTimeChange}
              required
            >
              <Bookings availableSlots={availableTimes} />
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="guests">
              Number of guests
              <img
                src={AsteriskIcon}
                alt="asterisk icon"
                className="asterisk-icon"
              />
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              placeholder="1"
              min="1"
              max="10"
              value={guests.value}
              onChange={handleGuestsChange}
              required
            />
            {!guests.isValid && (
              <div className="warning">
                <img src={WarningIcon} alt="warning icon" />
                <p className="error">Please enter a number between 1 and 10.</p>
              </div>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="occasion">
              Occasion
              <img
                src={AsteriskIcon}
                alt="asterisk icon"
                className="asterisk-icon"
              />
            </label>
            <select
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={handleOccasionChange}
              required
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <input
            id="submit-btn"
            disabled={!isFormValid}
            type="submit"
            value="Make Your Reservation"
            aria-label="On Click"
            aria-labelledby="Make Your Reservation"
          />
        </form>
      </main>
    </section>
  );
};

export default BookingForm;
