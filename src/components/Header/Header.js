import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import Dish from "../../pages/Dish/Dish";
import Drink from "../../pages/Drink/Drink";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Slider from "../Slider/Slider";

const Logo = `${process.env.PUBLIC_URL}/assets/images/logo.jpg`;

const Navbar = () => {
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleLinkClick = (path) => {
    if (path === "/home") {
      setIsLinkClicked(false);
    } else {
      setIsLinkClicked(true);
    }
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
            <Link to="/dish" onClick={() => handleLinkClick("/dish")}>
              Carte
            </Link>
          </li>
          <li className="navbar-link">
            <Link to="/drink" onClick={() => handleLinkClick("/drink")}>
              Boissons
            </Link>
          </li>
          <li className="navbar-link cta">
            <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
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
      {(!isLinkClicked || window.location.pathname === "/home") && <Slider />}
    </Router>
  );
};

export default Navbar;
