import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GiSplitCross } from "react-icons/gi";
import Nav_Mobile from "./Nav_Mobile/Nav_Mobile";
function Navbar() {
  const show = () => {
    const navMenu = document.querySelector(".nav_menu");
    navMenu.classList.add("show");
  };
  const hide = () => {
    const navMenu = document.querySelector(".nav_menu");
    navMenu.classList.remove("show");
  };
  return (
    <section className="">
      <div className="container">
        <nav className="nav_content">
          <div className="">
            <h6 className="logo m-0">EXITEK</h6>
          </div>
          <div className="nav_menu">
            <GiSplitCross onClick={hide} className="ms-auto cross" />
            <Link to="/" className="text-decoration-none">
              <li className="list">Home</li>
            </Link>

            <Link to="/about" className="text-decoration-none">
              <li className="list">About Us</li>
            </Link>
            <Link to="/career" className="text-decoration-none">
              <li className="list">Careers</li>
            </Link>
            <li className="list">Contact Us</li>
            <Link className="text-decoration-none" to="/join_us">
              <li className="list">Join Us</li>
            </Link>
          </div>
          <div className="bar">
            <Link className="text-decoration-none" to="/join_us ">
              <li className="list">Join Us</li>
            </Link>
            <FaBars onClick={show} />
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
