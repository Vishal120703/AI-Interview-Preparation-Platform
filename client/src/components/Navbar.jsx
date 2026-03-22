import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <h2 className="brand">InterviewIQ.AI</h2>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <div className="coins">
          💰 <span>0</span>
        </div>

        <div className="profile">
          {/* <Link  className="profile"/>👤<Link/> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;