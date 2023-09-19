import React from "react";
import "./Positions.css";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function Positions() {
  const navigate = useNavigate();
  const apply = (title) => {
    navigate("/career/" + title);
  };
  return (
    <div className="position py-5 px-2">
      <h4 className="text-center bold_font">Open positions</h4>
      <div className="positions_card_content">
        {/*card single 1 */}
        <div className="single_positions_card">
          <div className="">
            <h6 className="bold_font">Junior iOS developer</h6>
            <div className="position_title">
              <p className="mute_color font_size d-flex align-items-center">
                <CiLocationOn className="text-primary" />
                100% Remote
              </p>
              <p className="mute_color font_size ms-3 d-flex align-items-center">
                <CiStopwatch className="text-primary" />
                Full-time
              </p>
            </div>
          </div>
          <buton
            className="btn btn-outline-primary radius_50 position_btn"
            onClick={() => apply("Junior iOS developer")}
          >
            Apply
          </buton>
        </div>
        {/*card single 2 */}
        <div className="single_positions_card">
          <div className="">
            <h6 className="bold_font">Graphics Designer</h6>
            <div className="position_title">
              <p className="mute_color font_size d-flex align-items-center">
                <CiLocationOn className="text-primary" />
                100% Remote
              </p>
              <p className="mute_color font_size ms-3 d-flex align-items-center">
                <CiStopwatch className="text-primary" />
                Full-time
              </p>
            </div>
          </div>
          <buton
            className="btn btn-outline-primary radius_50 position_btn"
            onClick={() => apply("Graphics Designer")}
          >
            Apply
          </buton>
        </div>
        {/*card single 3 */}
        <div className="single_positions_card">
          <div className="">
            <h6 className="bold_font">Marketting Specialist</h6>
            <div className="position_title">
              <p className="mute_color font_size d-flex align-items-center">
                <CiLocationOn className="text-primary" />
                100% Remote
              </p>
              <p className="mute_color font_size ms-3 d-flex align-items-center">
                <CiStopwatch className="text-primary" />
                Full-time
              </p>
            </div>
          </div>
          <buton
            className="btn btn-outline-primary radius_50 position_btn"
            onClick={() => apply("Marketting Specialist")}
          >
            Apply
          </buton>
        </div>
      </div>
    </div>
  );
}

export default Positions;
