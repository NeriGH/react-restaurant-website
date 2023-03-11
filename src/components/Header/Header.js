import React from "react";
import "./Header.css";

const Logo = `${process.env.PUBLIC_URL}/assets/images/logo.jpg`;

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="La Table de Chantal" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="/">Carte</a>
        </li>
        <li className="navbar-link">
          <a href="/menu">Boissons</a>
        </li>
        <li className="navbar-link cta">
          <a href="/reservation">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
