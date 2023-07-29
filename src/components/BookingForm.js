import { useState, useEffect } from "react";

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const { availableTimes, updateTimes } = props;
    const [time, setTime] = useState("");
    const [reservationSucceeded, setReservationSucceeded] = useState(false);

      
    const [occasion, setOccasion] = useState("1");
    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");
        setNumber("");
        setOccasion("1");
        setTime("");
        setName("");
        setReservationSucceeded(true);
        console.log("Form submitted!");
        
        setTimeout(() => {
          setReservationSucceeded(false);
      }, 3000);
    };

    const [isFormValid, setFormValid] = useState(false);


    function handleDateChange(e) {
      const selectedDate = e.target.value; 
  
      setDate(selectedDate);
      updateTimes(selectedDate);
  
    }

    useEffect(() => {
      function validateForm() {
        const isDateValid = !!date;
        const isTimeValid = !!time;
        const isNumberValid = !!number;
        const isOccasionValid = !!occasion;
        const isNameValid = /^[a-zA-Z\s]+$/.test(name);
        setFormValid(isDateValid && isTimeValid && isNumberValid && isOccasionValid && isNameValid);
      }
    
      validateForm();
    }, [date, time, number, occasion, name]);


    return (
        <div className="container">
    <form onSubmit={handleSubmit} noValidate style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-name">Your Name</label>
        <input
          type="text"
          id="res-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="^[a-zA-Z\s]+$"
          required
          title="Please enter a valid name with letters and spaces only"
          placeholder="Enter your name"
        />
        {!/^[a-zA-Z\s]+$/.test(name) && name !== "" && (
          <span style={{ color: "red" }}>Please enter a valid name with letters and spaces only</span>
        )}

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} required min={new Date().toISOString().split("T")[0]} />


        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time.time} disabled={time.booked}>
              {time.time}
            </option>
          ))}
        </select>

   <label htmlFor="guests">Number of guests</label>
   <input 
   type="number" placeholder="1" min="1" max="10" id="guests" 
   value={number} 
   onChange={e => setNumber(e.target.value)} required/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" disabled={!isFormValid || !date}/>
   </form>
   {reservationSucceeded && <p>Reservation succeeded!</p>}
</div>
    );
}

export default BookingForm;