import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import Dish from "../../pages/Dish/Dish";
import Drink from "../../pages/Drink/Drink";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";

const Logo = `${process.env.PUBLIC_URL}/assets/images/logo.jpg`;

const Navbar = ({ setLinkClicked }) => {
  const handleLinkClick = () => {
    setLinkClicked();
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/home">
            <img src={Logo} alt="La Table de Chantal" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li className="navbar-link">
            <Link to="/dish" onClick={handleLinkClick}>
              Carte
            </Link>
          </li>
          <li className="navbar-link">
            <Link to="/drink" onClick={handleLinkClick}>
              Boissons
            </Link>
          </li>
          <li className="navbar-link cta">
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
