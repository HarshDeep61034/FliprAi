import Navbar from "./components/Navbar";
import "./App.css";

function App() {
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
          <button className="btn-pr">Humanize_iT</button>
          <button className="btn-sr">Flip</button>
        </div>
      </div>
    </>
  );
}

export default App;
