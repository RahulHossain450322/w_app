import React from "react";
import "./About.css";
import Card from "./About_Components/Card";
import About_body from "./About_body/About_body";
import Banner from "../Banner/Banner";
import About_value from "./About_value/ABout_value";
function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about_content ">
          <h2 className="text-center">
            Innovating the future. <br /> Where imagination meets creation
          </h2>
          <p className="text-center font_size mute_color mt-3">
            Our misson is to impower creators with groundbreaking tools that
            unlock their creative
            <br />
            potential, enabling them to term their boldest ideas into reality.
          </p>
          <Card />
        </div>
        <div className="about_body_value">
          <About_body />
          <About_value />
        </div>
        <Banner />
      </div>
    </section>
  );
}

export default About;
