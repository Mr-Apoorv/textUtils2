import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  function handleUppClick() {
    console.log("button clicked");
    let textInUppercase = text.toUpperCase();
    setText(textInUppercase);
    props.showAlert("Text changed to Uppercase", "success");
  }

  function handleLowClick() {
    console.log("button clicked");
    let textInLowercase = text.toLowerCase();
    setText(textInLowercase);
    props.showAlert("Text changed to Lowercase", "success");
  }

  function handleClearClick() {
    console.log("button clicked");
    let textCleared = "";
    setText(textCleared);
    props.showAlert("Text cleared", "success");
  }

  function handleCopy() {
    let inputText = document.getElementById("exampleFormControlTextarea1");
    inputText.select(); // will select text (not required for copying, just for display)
    navigator.clipboard.writeText(inputText.value); // will copy the text in clipboard, then it can be pasted anywhere (required and main code line for copy)
    props.showAlert("Text copied to clipboard", "success");
  }

  function handleExtraSpaces() {
    let inputText = text.split(/[ ]+/);
    setText(inputText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  }

  function handleTextChange(event) {
    console.log(`text changed`);
    setText(event.target.value);
  }
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleTextChange}
            style={
              props.mode === "dark"
                ? { backgroundColor: "gray", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUppClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
      </div>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Summary of texts</h2>
        <p>
          Your text has {text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(3)} minute read</p>
        <h2>Preview</h2>
        <pre>{text}</pre>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter your text",
};
