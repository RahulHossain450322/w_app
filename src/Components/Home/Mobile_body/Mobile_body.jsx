import React from "react";
import "./Mobile.css";
import photo_1 from "./images/Group 2565.png";
import photo_2 from "./images/Group 2566.png";
import photo_3 from "./images/Group 2568.png";
import photo_4 from "./images/Frame 1572.png";
function Mobile_body() {
  return (
    <div className="body mobile">
      <div className="body_content">
        {/*single_content 1 */}
        <div className="single_content">
          <div className="">
            <img src={photo_1} alt="" />
          </div>
          <div className="body_text">
            <h4 className="">Body editor</h4>
            <p className="mt-3">
              Our groundbreaking technology empowers indivisuals <br />
              of all backgrounds to effortlessly transform their <br /> bodies
              to perfection. With our user-friendly interface,
              <br />
              no prior skills or experties are required.
            </p>
          </div>
        </div>
        {/*single_content 2 */}
        <div className="single_content">
          <div className="">
            <img src={photo_2} alt="" />
          </div>
          <div className="body_text">
            <h4 className="">Magic Retouch</h4>
            <p className="mt-3">
              Effortlessly make your selfies shine with
              <br />
              natural-looking enhancements that exude
              <br /> professionalism and charm.
            </p>
          </div>
        </div>
        {/*single_content 3 */}
        <div className="single_content">
          <div className="">
            <img src={photo_3} alt="" />
          </div>
          <div className="body_text">
            <h4 className="">Magic Protection</h4>
            <p className="mt-3">
              Our advanced technology samelessly intergrates
              <br />
              body adjustments while expertly safegurding
              <br /> the background from any distortion.
            </p>
          </div>
        </div>
        {/*single_content 2 */}
        <div className="single_content">
          <div className="">
            <img src={photo_4} alt="" />
          </div>
          <div className="body_text">
            <h4 className="">Magic Remover</h4>
            <p className="mt-3">
              It works tirelessly to automatically detect
              <br />
              objects within your visuals, leaving you with the
              <br /> ease of a single click to remove them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile_body;
