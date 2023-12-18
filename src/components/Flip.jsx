import { useState, useRef } from "react";
import copy from "clipboard-copy";
import "./Flip.css";
import { FaRegClipboard } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const Flip = () => {
  const [response, setResponse] = useState();
  const [inputValue, setInputValue] = useState("");
  const [mode, setMode] = useState("IRONMAN");
  const textToCopyRef = useRef(null);
  const handleModes = (event) => {
    setMode(event.target.textContent);
  };

  const handleCopyClick = () => {
    const textToCopy = textToCopyRef.current.innerText;
    copy(textToCopy);
  };

  const sampleText = () => {
    const textArea = document.getElementsByClassName("textarea")[0];
    textArea.value = `Drinking water is of utmost importance for maintaining good health and overall well-being. Our bodies are composed mainly of water, and it plays a crucial role in various physiological functions. Staying hydrated helps regulate body temperature, aids in digestion, and facilitates the transport of nutrients and oxygen to cells. Moreover, water is essential for flushing out toxins and waste products through urination and sweating, ensuring the proper functioning of our kidneys and other vital organs.Additionally, drinking an adequate amount of water helps improve cognitive function and concentration, as even mild dehydration can lead to impaired mental performance. It also promotes healthier skin, as hydration keeps the skin moisturized and glowing.Furthermore, water plays a pivotal role in weight management by promoting a feeling of fullness, reducing overeating, and aiding in the metabolism of stored fats.Overall, staying hydrated is crucial for maintaining optimal health, energy levels, and overall vitality. It is essential to drink enough water throughout the day, and it's one of the simplest yet most effective ways to support a healthy lifestyle";
of utmost importance for maintaining good health and overall well-being. Our bodies are composed mainly of water, and it plays a crucial role in various physiological functions. Staying hydrated helps regulate body temperature, aids in digestion, and facilitates the transport of nutrients and oxygen to cells. Moreover, water is essential for flushing out toxins and waste products through urination and sweating, ensuring the proper functioning of our kidneys and other vital organs.
Additionally, drinking an adequate amount of water helps improve cognitive function and concentration, as even mild dehydration can lead to impaired mental performance. It also promotes healthier skin, as hydration keeps the skin moisturized and glowing.
Furthermore, water plays a pivotal role in weight management by promoting a feeling of fullness, reducing overeating, and aiding in the metabolism of stored fats.
Overall, staying hydrated is crucial for maintaining optimal health, energy levels, and overall vitality. It is essential to drink enough water throughout the day, and it's one of the simplest yet most effective ways to support a healthy lifestyle`;
    setInputValue(textArea.value);
  };

  const handleSendMessage = async () => {
    document.getElementsByClassName("humanize")[0].innerHTML = "Loading...";

    if (inputValue === "") return;
    // Update the state with the user's message
    const URL = import.meta.env.VITE_FLIPRAI_API_URL;

    try {
      // Send the user message to the backend
      const response = await fetch(URL, {
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

      // Update the state with the bot's response
      setResponse(data);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      document.getElementsByClassName("humanize")[0].innerHTML = "Humanize";
    }
  };
  return (
    <>
      <div className="flip" id="sectionId">
        <div className="modes">
          <button
            onClick={(e) => handleModes(e)}
            className={mode === "IRONMAN" ? "btn-pr" : ""}
          >
            IRONMAN
          </button>
          <button
            onClick={(e) => handleModes(e)}
            className={mode === "HULK" ? "btn-pr" : ""}
          >
            HULK
          </button>
        </div>
        <h1>Use AI Rewriter for FREE</h1>
        <textarea
          placeholder="Enter the Text you want to make unique & human written."
          className="textarea"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button className="btn-pr humanize" onClick={handleSendMessage}>
          Humanize
        </button>
        <div className="btns-div">
          <button className="btn-sr">Check</button>
          <button className="btn-sr" onClick={sampleText}>
            Use Sample Text
          </button>
        </div>
      </div>
      {response && (
        <div className="response-div">
          Your New Content:
          <div className="copy-div">
            <button onClick={handleCopyClick}>
              <FaRegClipboard />
            </button>
            <button onClick={handleSendMessage}>Humanize Again</button>
          </div>
          <div className="response-content" ref={textToCopyRef}>
            {response.response}
          </div>
        </div>
      )}
    </>
  );
};

export default Flip;
