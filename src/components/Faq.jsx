import { useState } from "react";
import "./Faq.css";
const Faq = (props) => {
  const [ans, setAns] = useState(false);
  const handleClick = () => {
    setAns((prevState) => !prevState);
  };
  return (
    <div onClick={handleClick} className="faq-div">
      <div id={props.id} className="que">
        <div>{props.question}</div>
        <div>{ans ? "-" : "+"}</div>
      </div>
      <br />
      <div id={props.id} className={ans ? "ans-show ans" : "ans-hide ans"}>
        {props.answer}
      </div>
    </div>
  );
};

export default Faq;
