import { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

function BookingPage() {
     const initialState = [];

 
    function reducer(state, action) {
      switch (action.type) {
        case "UPDATE_TIMES":
          return action.payload;
        default:
          return state;
      }
    }
  

    const [availableTimes, dispatch] = useReducer(reducer, initialState);
  

    function updateTimes(date) {

      const times = [
        { time: "12:00 PM", booked: false },
        { time: "1:00 PM", booked: true },
        { time: "2:00 PM", booked: false },
        { time: "3:00 PM", booked: false },
        { time: "4:00 PM", booked: true },
      ];
      dispatch({ type: "UPDATE_TIMES", payload: times });
    }

  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      <Footer />
    </>
  );
}

export default BookingPage;
