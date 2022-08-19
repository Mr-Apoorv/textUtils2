import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    function handleUppClick() {
        console.log("button clicked");
        let textInUppercase=text.toUpperCase();
        setText(textInUppercase);
    }
    function handleTextChange(event) {
        console.log(`text changed`);
        setText(event.target.value);
    }
  return (
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
      <button className="btn btn-primary" onClick={handleUppClick}>Convert to Uppercase</button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter your text",
};
