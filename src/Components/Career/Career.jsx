import React from "react";
import "./Career.css";
import Offer from "./Offer/Offer";
import Positions from "./Positions/Positions";
function Career() {
  return (
    <section className="career">
      <div className="container">
        <div className="career_content">
          <h2 className="text-center">Be a part of our mission</h2>
          <p className="text-center mt-3 font_size mute_color">
            Harold paphian whateer heavenly to shamed lone did, in revellers to{" "}
            <br />
            forgot to. He ah not ive deem dares lineage.
          </p>
          <div className="btn_div">
            <button className="button">View openings</button>
          </div>
        </div>
        <div className="offer_openings">
          <Offer />
          <Positions />
        </div>
      </div>
    </section>
  );
}

export default Career;
