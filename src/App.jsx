import Navbar from "./components/Navbar";
import Flip from "./components/Flip";
import "./App.css";

function App() {
  const scrollToSection = () => {
    const section = document.getElementById("sectionId");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-logo stroke">FliprAi</div>
        <div className="main-title">
          <p>
            Enjoy Your Guilty Pleasure!! Bypassing All the AI DETECTIVES 🤫{" "}
          </p>
        </div>
        <div className="main-btns">
          <button className="btn-pr">DETECT</button>
          <button onClick={scrollToSection} className="btn-sr">
            Humanize_iT
          </button>
        </div>
      </div>
      <Flip id="sectionId" />
    </>
  );
}

export default App;
