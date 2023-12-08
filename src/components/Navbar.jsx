import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav>
        <div className="nav-logo">FliprAi</div>
        <div className="nav-links-div">
          <div className="nav-link btn-txt">Home</div>
          <div onClick={props.handleScroll} className="nav-link btn-pr">
            Flip
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
