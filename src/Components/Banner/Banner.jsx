import React from "react";
import "./Banner.css";
import { BsArrowRight } from "react-icons/bs";
function Banner() {
  return (
    <div className="banner_content">
      <h2 className="text-center">Join our team</h2>
      <p className="text-center mt-3 f_s_14">
        We extend a warm invitation to talented indivisuals like you to become
        an integral <br /> part of our vibrant and forward-thinking team.
      </p>
      <div className="btn_div">
        <button className="button bold_font">
          Learn more
          <BsArrowRight className="ms-2" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
