import React, { useState } from "react";

const TextForm = (props) => {

  const handleUpClick = () => {
    // console.log("upper case was click"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
    // setText ("You have clicked on handleUpClick")
  };
  const handleLoClick = () => {
    // console.log("upper case was click"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
    // setText ("You have clicked on handleUpClick")
  };
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Clear text", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra spaces", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black" 
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length -1} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:"Enter something to preview here"}</p>
      </div>
    </>
  );
};

export default TextForm;
