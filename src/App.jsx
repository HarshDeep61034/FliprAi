import Navbar from "./components/Navbar";
import "./App.css";
import { Link } from "react-router-dom";

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
          <Link to={"/check"}>
            <button className="btn-pr">DETECT</button>
          </Link>
          <Link to={"/flip"}>
            <button className="btn-sr">Humanize_iT</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
