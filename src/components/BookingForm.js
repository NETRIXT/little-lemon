import { useState } from "react";

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState("");
    const { availableTimes, updateTimes } = props;
    const [time, setTime] = useState("");


      
    const [occasion, setOccasion] = useState("1");
    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");
        setNumber("");
        setOccasion("1");
        setTime("");
        console.log("Form submitted!");
    };

    function handleDateChange(e) {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        updateTimes(selectedDate);
      }


    return (
        <div className="container">
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
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
   onChange={e => setNumber(e.target.value) }/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"/>
   </form>
</div>
    );
}

export default BookingForm;