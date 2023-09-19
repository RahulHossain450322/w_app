import React from "react";
import "./Nav_mobile.css";
function Nav_Mobile() {
  return (
    <nav className="nav_mobile">
      <div className="">
        <h6 className="logo m-0">EXITEK</h6>
      </div>
      <div className="nav_menu">
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
        <Link to="/join_us">
          <li className="list">Join Us</li>
        </Link>
        <FaBars onClick={show} />
      </div>
    </nav>
  );
}

export default Nav_Mobile;
