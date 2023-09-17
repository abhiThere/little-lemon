import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  const availableTimes = [];
  const dispatch = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  const headingElement = screen.getByText("Little Lemon");

  expect(headingElement).toBeInTheDocument();
});
