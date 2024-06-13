import React from "react";

const Experience = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="mx-5 ">
      <div className="row gap-5">
        <div className="col experienceBG">
          <img src="../src/assets/experience.jfif" alt="" class="img-fluid" />
        </div>
        <div className="col">
          <div>
            <h4 className="pt-5 pb-4 text-danger fw-bold">We Provide</h4>
            <h1>Complete <span class="text-success">Health Care</span> Solutions For You</h1>
            <p>
              There are many variations of passages available but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words.
            </p>
            <div className="d-flex">
              <img src="your-image-source.jpg" alt="sdfds" />
              <div className="mx-2">
                <h3>Free Checkup</h3>
                <p>Take a look at our round up of the best shows.</p>
              </div>
            </div>
            <div className="d-flex">
              <img src="your-image-source.jpg" alt="sdfds" />
              <div className="mx-2">
                <h3>Highly Professional Staff </h3>
                <p>Take a look at our round up of the best shows.</p>
              </div>
            </div>
            <div className="d-flex">
              <img src="your-image-source.jpg" alt="sdfds" />
              <div className="mx-2">
                <h3>Affordable Pricing</h3>
                <p>Take a look at our round up of the best shows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
