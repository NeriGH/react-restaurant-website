import logo from "./logo.svg";
import "./Home.css";
import "../../components/Header/Header";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
