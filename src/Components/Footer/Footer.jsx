import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer_content">
          <div className="">
            <h6 className="logo m-0 footer_logo">EXITEK</h6>
          </div>
          <div className="footer_menu">
            <li className="list_Footer">Home</li>
            <li className="list_Footer">About Us</li>
            <li className="list_Footer">Careers</li>
            <li className="list_Footer">Terms of Services</li>
            <li className="list_Footer">Privacy Policy</li>
          </div>
        </nav>
        <hr className="m-0" />
        <div className="text-center footer_title">
          &copy; 2022-2023 EXITEK LTD. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
