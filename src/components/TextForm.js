import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [bold, setBold] = useState("false");
  const [italic, setItalic] = useState("false");
  const [capitalize, setCapitalize] = useState("false");
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase!!", "success");
  };
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared!!", "success");
  };

  const handleCopy = () => {
    var copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to clipboard!!", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!!", "success");
  };

  const handleBold = () => {
    const temp = "true";
    setBold(temp);
    props.showAlert("Text font done Bold!!", "success");
  };

  const handleItalic = () => {
    const temp = "true";
    setItalic(temp);
    props.showAlert("Text style done Italic!!", "success");
  };

  const handleCapitalize = () => {
    const temp = "true";
    setCapitalize(temp);
    props.showAlert("Text Capitalized!!", "success");
  };

  const handleNormal = () => {
    const temp = "false";
    setItalic(temp);
    setBold(temp);
    setCapitalize(temp);
    props.showAlert("Text style done normal!!", "success");
  };

  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
              fontWeight: bold === "true" ? "bold" : "normal",
              fontStyle: italic === "true" ? "italic" : "",
              textTransform: capitalize === "true" ? "capitalize" : "",
            }}
            onChange={handleOnChange}
          />
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleBold}
        >
          Bold Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleItalic}
        >
          Italic Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalize}
        >
          Capitalize Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleNormal}
        >
          Normal Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="mt-3 ">Your Text Summary</h2>
        <p>
          No. of words:{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          <br />
          No. of Characters: {text.length}
          <br />
          Reading Time:{" "}
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <h2>Preview</h2>
        {text.length > 0 ? text : "Nothing to Preview!!"}
      </div>
    </>
  );
}
