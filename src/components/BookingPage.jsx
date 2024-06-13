import React from "react";

const BookingPage = () => {
  return (
    <div className="bookingimg">
      <img src="../src/assets/booking.jfif" alt="bannerimage" />
      <div className="bookingtext text-center">
        <h4>Improving the quality of your life</h4>
        <h1>Are You Looking For <span style={{color: "#20c7ba"}}>Health Care</span> Consultation?</h1>
        <button className="btn">Book Appointment Now</button>
      </div>
    </div>
  );
};

export default BookingPage;
