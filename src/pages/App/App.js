import "./App.css";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

function App() {
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleLinkClick = () => {
    setIsLinkClicked(true);
  };

  return (
    <div className="App">
      <Header setLinkClicked={handleLinkClick} />
      <Footer />
      {!isLinkClicked && <Slider />}
    </div>
  );
}

export default App;
