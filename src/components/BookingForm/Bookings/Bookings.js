import BookingSlot from "./BookingSlot/BookingSlot";

const Bookings = ({ availableSlots }) => {
  return (
    <>
      {availableSlots.map((availableSlot) => (
        <BookingSlot key={availableSlot} availableSlot={availableSlot} />
      ))}
    </>
  );
};

export default Bookings;
