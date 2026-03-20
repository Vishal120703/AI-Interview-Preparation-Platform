import React from "react";
import "./footer.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-box">

        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="logo"><img src={logo} alt="logo" />InterviewIQ.AI</h3>
          <p>
            Practice smarter with AI-powered mock interviews and real-time feedback.
          </p>

          <div className="socials">
            <span>🌐</span>
            <span>🐦</span>
            <span>💼</span>
            <span>📷</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>Features</p>
          <p>How It Works</p>
          <p>Careers</p>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <p>AI Mock Interviews</p>
          <p>Resume Analysis</p>
          <p>Voice Interview</p>
          <p>Performance Tracking</p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Pune, India</p>
          <p>📧 support@interviewiq.ai</p>
          <p>📞 +91 9876543210</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 InterviewIQ.AI. All rights reserved.</p>

        <div className="footer-links-bottom">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;