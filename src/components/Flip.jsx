import "./Flip.css";
import { IoSend } from "react-icons/io5";
const Flip = () => {
  return (
    <div className="flip" id="sectionId">
      <h1>Use AI Rewriter for FREE</h1>
      <div className="chat-div">.</div>
      <div className="input-div">
        <input type="text" name="user-text" id="input-chat" />
        <IoSend className="send-icon" />
      </div>
    </div>
  );
};

export default Flip;
