import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-logo">FliprAi</div>
        <div className="nav-links-div">
          <Link to={"/"}>
            <div className="nav-link btn-txt">Home</div>
          </Link>
          <Link to={"/flip"}>
            <div className="nav-link btn-pr">Flip</div>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
