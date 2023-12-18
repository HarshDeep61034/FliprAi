import Navbar from "./components/Navbar";
import Flip from "./components/Flip";
import "./App.css";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import data from "../faq.json";

function App() {
  const elements = data.map((item, index) => {
    return <Faq question={item.question} id={index} answer={item.answer} />;
  });
  const scrollToSection = () => {
    const section = document.getElementById("sectionId");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar handleScroll={scrollToSection} />
      <div className="main">
        <div className="main-logo stroke">FliprAi</div>
        <div className="main-title">
          <p>
            Enjoy Your Guilty Pleasure!! Bypassing All the AI DETECTIVES 🤫{" "}
          </p>
        </div>
        <div className="main-btns">
          <button onClick={scrollToSection} className="btn-sr">
            Explore
          </button>
        </div>
      </div>
      <Flip />
      <h1>Frequently Asked Questions</h1>
      <div className="faq-section"> {elements}</div>
      <Footer />
    </>
  );
}

export default App;
