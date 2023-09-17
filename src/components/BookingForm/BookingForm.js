import { useState } from "react";
import Bookings from "./Bookings/Bookings";

import "./BookingForm.css";

export const getInitialDate = () => {
  const initialDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });
  const formattedDate = initialDate.split("/").reverse().join("-");
  return formattedDate;
};

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState(getInitialDate());

  const [time, setTime] = useState("17:00");

  const [guests, setGuests] = useState("1");

  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "date_change", payload: e.target.value });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date: date,
      time: date ? time : "",
      guests: guests,
      occasion: occasion,
    };

    submitForm(formData);
  };

  return (
    <section className="booking-form">
      <header>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Find a table for any occasion</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            name="res-date"
            value={date}
            onChange={handleDateChange}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="res-time"
            value={time}
            onChange={handleTimeChange}
          >
            <Bookings availableSlots={availableTimes} />
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={guests}
            onChange={handleGuestsChange}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={handleOccasionChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input
            type="submit"
            value="Make Your Reservation"
            aria-labelledby="Make Your Reservation"
          />
        </form>
      </main>
    </section>
  );
};

export default BookingForm;
