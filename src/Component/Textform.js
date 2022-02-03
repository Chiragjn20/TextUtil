import React, { useState } from "react";

export default function Textform(props) {
  const handleUpperclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to upper case' , 'success')
  };
  const handleLowerclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-group my-3">
          <label for="exampleFormControlTextarea1">Enter your text</label>
          <textarea
          placeholder="Enter your word here"
          style={{ backgroundColor : props.mode === 'light' ? 'white' : ' #042743' }}
            className="form-control"
            onChange={handleChange}
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerclick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container">
        <h2> Your text summery</h2>
        <p>
          {" "}
          Your text has total {text.length} characters. and{" "}
          {text.split(" ").length} words
        </p>
        <p>It took you {0.008 * text.split(" ").length} minutes to read</p>
        <h2> Preview</h2>
        <p> {text}</p>
      </div>
    </>
  );
}
