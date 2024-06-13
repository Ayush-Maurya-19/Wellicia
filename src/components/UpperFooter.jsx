import React from "react";

const UpperFooter = () => {
  return (
    <div style={{ backgroundColor: "#283b6a" }}>
      <div className="container pb-5 pt-5 text-white">
        <div className="row pt-4">
          <div className="col-md-4">
            <h3>Registered Office Address:</h3>
            <p className="mt-4 ufp" >
              HOUSE NO. 997, IN FRONT OF SANTA TERSA, NTL ROAD, KATHGODAM,
              UTTRAKHAND INDIA-263126
            </p>
          </div>
          <div className="col-md-3">
            <h3>Branch Office Address:</h3>
            <p className="mt-4 ufp" >
              F-522 BASEMENT, F-BLOCK RAJAJIPURAM LUCKNOW UTTAR PRADESH-226017
            </p>
          </div>
          <div className="col-md-3">
            <h3>Projected Factory:</h3>
            <p className="mt-4 ufp" >
              60/92 KHASRA NO. 330/122. YAMUNA NAGAR ROAD, PAONTA SAHIB, DISTT.
              SIMROUR (H.P.) 173025
            </p>
          </div>
          <div className="col-md-2">
            <h3>Quick Contact</h3>{" "}
            <p className="mt-4">
              <strong>contact@wellicia.in</strong>
              <br />
              <strong>sales@wellicia.in</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
