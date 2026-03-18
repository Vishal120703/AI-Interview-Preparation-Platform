import React from "react";
import "./hero.css";
import robot from "../assets/robot.png"; // add your image here

const Hero = () => {
  return (
    <div className="hero">
      
      {/* Left Side */}
      <div className="hero-left">
        <h1>
          Master Your Interviews with <br />
          <span>AI-Powered Mock Sessions</span>
        </h1>

        <p>
          Practice for your job interviews with intelligent, role-specific
          mock sessions designed to adapt and provide real-time feedback.
        </p>

        <div className="buttons">
          <button className="primary-btn">Start Mock Interview</button>
          <button className="secondary-btn">View Past Sessions</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img src={robot} alt="robot" />
      </div>

    </div>
  );
};

export default Hero;