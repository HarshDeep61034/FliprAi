import { useState } from "react";
import "./Flip.css";
import { IoSend } from "react-icons/io5";

const Flip = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSendMessage = async () => {
    document.getElementsByClassName("loading")[0].style.display = "block";
    if (inputValue === "") return;
    // Update the state with the user's message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, type: "user" },
    ]);
    const URL = import.meta.env.VITE_FLIPRAI_API_URL;
    console.log(URL);
    console.log(messages);
    try {
      // Send the user message to the backend
      const response = await fetch("http://localhost:6969/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response JSON
      const data = await response.json();
      console.log(data);
      // Update the state with the bot's response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.response, type: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error.message);
    }

    document.getElementsByClassName("loading")[0].style.display = "none";
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
        <div className="loading">
          {" "}
          <p>Loading...</p>
        </div>
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
