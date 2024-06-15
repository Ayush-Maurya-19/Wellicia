import React from "react";

const Home = () => {
  return (
    <div className="banner_image ">
      <img src="/assets/bg.jfif" alt="bannerimage" />
      <div className="banner-text container">
        <h4 className="text-white fw-bold">We Provide Best</h4>
        <h1 style={{ fontSize: "60px" }} className="text-white fw-bold">
          Medical And <span className="text-info">Health Care</span>
        </h1>
        <h1 style={{ fontSize: "60px" }} className="text-white fw-bold">
          Services
        </h1>
        <button className="mt-4 p-2 btn btn-info text-white fw-bold">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Home;
