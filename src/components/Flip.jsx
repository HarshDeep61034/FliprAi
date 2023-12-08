import { useState } from "react";
import "./Flip.css";
import { IoSend } from "react-icons/io5";
const Flip = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSendMessage = async () => {
    // Send the message to your backend or external service (e.g., ChatGPT)
    // const response = await sendMessageToChatGPT(inputValue);

    // Update the state with the received message
    setMessages([...messages, { text: inputValue, type: "user" }]);
    // setMessages([...messages, { text: response, type: "bot" }]);

    // Clear the input field
    setInputValue("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div className="flip" id="sectionId">
      <h1>Use AI Rewriter for FREE</h1>
      <div className="chat-div">
        <div className="message bot">
          {" "}
          Hi this is a sample respone from chatGPT
        </div>{" "}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === "user" ? "user" : "bot"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-div">
        <input
          type="text"
          name="user-text"
          id="input-chat"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <IoSend className="send-icon" onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default Flip;
