import React from "react";
import "./About_body.css";
import Light_Icon from "./images/Light.png";
import Remark_Icon from "./images/Remark.png";
import Cross_Icon from "./images/Cross.png";
function About_body() {
  return (
    <div className="about_body">
      <div className="card about_who">
        <div className="card-body">
          <h4 className="bold_font">Who we are</h4>
          <div className="card_body">
            {/*card_single 1*/}
            <div className="card_body_single">
              <div className="">
                <img src={Light_Icon} alt="" />
              </div>
              <h6 className="my-3 bold_font">Innovations Pioneers</h6>
              <p className="f_s_13 mute_color">
                Our team comprises a dynamic group <br />
                of frward-thinking indivisuals who are
                <br />
                driven by an insatiable passion for boath <br />
                technology and creativity.
              </p>
            </div>
            {/*card_single 2*/}
            <div className="card_body_single">
              <div className="">
                <img src={Remark_Icon} alt="" />
              </div>
              <h6 className="my-3 bold_font">Remarkable growth</h6>
              <p className="f_s_13 mute_color">
                Our team comprises a dynamic group <br />
                of frward-thinking indivisuals who are
                <br />
                driven by an insatiable passion for boath <br />
                technology and creativity.
              </p>
            </div>
            {/*card_single 3*/}
            <div className="card_body_single">
              <div className="">
                <img src={Cross_Icon} alt="" />
              </div>
              <h6 className="my-3 bold_font">Creative visionaries</h6>
              <p className="f_s_13 mute_color">
                Our team comprises a dynamic group <br />
                of frward-thinking indivisuals who are
                <br />
                driven by an insatiable passion for boath <br />
                technology and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_body;
