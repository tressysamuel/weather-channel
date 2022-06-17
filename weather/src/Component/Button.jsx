import React from "react";
import "../Styles/Button.css";

function Button({ text }) {
  return (
    <div>
      <button className="top-button">{text}</button>
    </div>
  );
}

export default Button;
