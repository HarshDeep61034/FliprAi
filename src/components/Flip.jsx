import { useState, useRef } from "react";
import copy from "clipboard-copy";
import "./Flip.css";
import { IoSend } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const Flip = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const CopyButton = ({ content }) => {
    const [copied, setCopied] = useState(false);
    const textToCopyRef = useRef(null);

    const handleCopyClick = () => {
      const textToCopy = textToCopyRef.current.innerText;
      copy(textToCopy);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
      // You can also provide visual feedback to the user, like displaying a tooltip or changing the button text
    };

    return (
      <div className="message bot">
        <div ref={textToCopyRef}>{content}</div>
        {!copied ? (
          <FaRegClipboard onClick={handleCopyClick} className="copy-icon" />
        ) : (
          <FaCheck className="copy-icon" />
        )}
      </div>
    );
  };

  const handleSendMessage = async () => {
    setInputValue("");
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
        {messages.map((message, index) =>
          message.type === "user" ? (
            <div key={index} className="message user">
              {message.text}
            </div>
          ) : (
            <CopyButton key={index} content={message.text} />
          ),
        )}
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
