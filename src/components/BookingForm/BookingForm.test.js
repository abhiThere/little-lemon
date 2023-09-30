import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking Form", () => {
  test("Renders the BookingForm heading", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const headingElement = screen.getByText("Book a table");

    expect(headingElement).toBeInTheDocument();
  });

  test("Validates date input field for correct validation attributes", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/);

    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
  });

  test("Validates time input field for correct validation attribute", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const timeInput = screen.getByLabelText(/Choose time/);

    expect(timeInput).toHaveAttribute("required");
  });

  test("Validates number of guests input field for correct validation attributes", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/);

    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  test("Validates occasion input field for correct validation attribute", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const occasionInput = screen.getByLabelText(/Occasion/);

    expect(occasionInput).toHaveAttribute("required");
  });

  test("Validates submit button for correct attributes", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const submitButton = screen.getByRole("button");

    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).not.toHaveAttribute("disabled");
  });

  test("Validates date input for valid date", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, { target: { value: "2023-09-24" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitForm).toHaveBeenCalled();
    expect(submitButton).not.toHaveAttribute("disabled");
  });

  test("Validates date input for empty value", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, { target: { value: "" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitForm).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

  test("Validates guests input for number of guests between 1 and 10", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, { target: { value: "8" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitForm).toHaveBeenCalled();
    expect(submitButton).not.toHaveAttribute("disabled");
  });

  test("Validates guests input for empty value", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, { target: { value: "" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitForm).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

  test("Validates guests input for number of guests less than 1", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, { target: { value: "0" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitForm).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

  test("Validates guests input for number of guests more than 10", () => {
    const availableTimes = [];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, { target: { value: "25" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitForm).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });
});
