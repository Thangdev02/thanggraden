import React from "react";
import "../styles/footer.css";
import newLogo from "../assets/images/newlogo.png"
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img className="logo" src={newLogo}/>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social-icons">
          <ul>
            <li><a href="#"><Facebook /></a></li>
            <li><a href="#"><Twitter /></a></li>
            <li><a href="#"><Instagram /></a></li>
            <li><a href="#"><LinkedIn /></a></li>
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
