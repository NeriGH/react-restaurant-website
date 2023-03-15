import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/App/App";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LandingPage />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
