import { getInitialDate } from "../../components/BookingForm/BookingForm";
import { initializeTimes, updateTimes } from "./BookingPage";

describe("initializeTimes and updateTimes functions", () => {
  test("Validates initializeTimes function", () => {
    expect(initializeTimes().length).toBeGreaterThan(0);
  });

  test("Validates updateTimes function", () => {
    expect(
      updateTimes(initializeTimes(), {type: "date_change", payload: getInitialDate()}).length
    ).toBeGreaterThan(0);
  });
});
