import React from "react";
import "./Card.css";
import img from "./images/Rectangle 2466.png";
function Card() {
  return (
    <div className="card_hero mt-3">
      <div className="card_img_cover">
        <img className="card_img" src={img} alt="" />
      </div>
      <div className="card_content">
        <div className="card_single_content">
          <h5 className="">2020</h5>
          <p className="mt-2 mute_color font_size">Company founded</p>
        </div>
        <div className="card_single_content">
          <h5 className="">11</h5>
          <p className="mt-1 mute_color font_size">Passionate people</p>
        </div>
        <div className="card_single_content">
          <h5 className="">5 Million +</h5>
          <p className="mt-1 mute_color font_size">Monthly active users</p>
        </div>
        <div className="card_single_content">
          <h5 className="">7</h5>
          <p className="mt-1 mute_color font_size">Created projects</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
