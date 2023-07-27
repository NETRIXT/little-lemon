function BookingSlot({ slot }) {
  return (
    <div className={`booking-slot ${slot.booked ? "booked" : ""}`}>
      {slot.time}
    </div>
  );
}

export default BookingSlot;