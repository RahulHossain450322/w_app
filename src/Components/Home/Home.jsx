import React from "react";
import "./Home.css";
import Body from "./home_components/Body";
import Banner from "../Banner/Banner";
import download from "./Home_card_icons/download.png";
import user from "./Home_card_icons/user.png";
import rating from "./Home_card_icons/rating.png";
import photo from "./Home_card_icons/photo.png";
import Mobile_body from "./Mobile_body/Mobile_body";
function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home_content">
          <h2 className="text-center">
            Empowering creativity and beauty <br /> with innovative Ai product
          </h2>
          <p className="text-center font_size home_des mt-3">
            Exitek stands as a software company that delivers cutting-edge
            beauty and creative <br />
            solution to a worldwide clientele encompassing global consumers.
          </p>
          <div className="home_card">
            {/*card 1*/}
            <div className="card-body">
              <div className="mb-3">
                <img src={download} alt="" />
              </div>
              <div className="h6 bold_font">
                32 <span className="card_title">Million +</span>
              </div>
              <p className="card_des  m-0">Downloads worldwide</p>
            </div>
            {/*card 2*/}
            <div className="card-body">
              <div className="mb-3">
                <img src={user} alt="" />
              </div>
              <div className="h6 bold_font">
                5 <span className="card_title">Million +</span>
              </div>
              <p className="card_des  m-0">Monthly active users</p>
            </div>
            {/*card 3*/}
            <div className="card-body">
              <div className="mb-3">
                <img src={rating} alt="" />
              </div>
              <div className="h6 bold_font">4.8</div>
              <p className="card_des  m-0">App Store rating</p>
            </div>
            {/*card 4*/}
            <div className="card-body">
              <div className="mb-3">
                <img src={photo} alt="" />
              </div>
              <div className="h6 bold_font">
                2 <span className="card_title">Million +</span>
              </div>
              <p className="card_des  m-0">Photo processed daily</p>
            </div>
          </div>
        </div>
        <Body />
        <Mobile_body />
        <Banner />
      </div>
    </section>
  );
}

export default Home;
