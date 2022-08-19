import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const [text, setText] = useState("");
    function handleUppClick() {
        console.log("button clicked");
        let textInUppercase=text.toUpperCase();
        setText(textInUppercase);
    }
    function handleLowClick() {
        console.log("button clicked");
        let textInLowercase=text.toLowerCase();
        setText(textInLowercase);
    }
    function handleClearClick() {
        console.log("button clicked");
        let textCleared="";
        setText(textCleared);
    }
    function handleTextChange(event) {
        console.log(`text changed`);
        setText(event.target.value);
    }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUppClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div>
        <h2>Summary of texts</h2>
        <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
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
