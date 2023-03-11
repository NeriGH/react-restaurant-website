import React from "react";
import "./Footer.css";

const FacebookIcon = `${process.env.PUBLIC_URL}/assets/images/facebook.png`;
const InstagramIcon = `${process.env.PUBLIC_URL}/assets/images/instagram.png`;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="#">
            <img src={InstagramIcon} alt="Instagram Icon" />
          </a>
          <a href="https://www.facebook.com/LaTableDeChantal/">
            <img src={FacebookIcon} alt="Facebook Icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
