import React from "react";
import "../styles/footer.css";
import newLogo from "../assets/images/newlogo.png"
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img className="logo" src={newLogo} alt="logo"/>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/duongdan1">Home</a></li>
            <li><a href="/duongdan1">About Us</a></li>
            <li><a href="/duongdan1">Products</a></li>
            <li><a href="/duongdan1">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social-icons">
          <ul>
            <li><a href="/duongdan1"><Facebook /></a></li>
            <li><a href="/duongdan1"><Twitter /></a></li>
            <li><a href="/duongdan1"><Instagram /></a></li>
            <li><a href="/duongdan1"><LinkedIn /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Thang Graden. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
