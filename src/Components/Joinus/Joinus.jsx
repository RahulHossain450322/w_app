import React from "react";
import "./Joinus.css";
import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
function Joinus() {
  return (
    <section className="join">
      <div className="container">
        <div className="join_content p-5">
          <div className="lets_talk">
            <h2 className="bold_font">Let,s talk</h2>
            <p className="mt-3 mute_color">Got a question about Exitek</p>
          </div>
          <div className="info">
            <div className="info_icon_email">
              <HiOutlineMail className="icon_size_30" />
              <p className="email mute_color">info@exitek.io</p>
            </div>
            <BsArrowRightShort className="icon_size_30" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Joinus;
