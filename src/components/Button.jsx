import React from "react";
import "../styles/Button.css";

const Button = ({ disabled, label, handleClick }) => {
  return (
    <button
      disabled={disabled}
      className={`add-creative-button ${disabled ? "disabled-button" : ""} ${label === "Done" && "px-60" }`}
      onClick={handleClick}
    >
      {label ?? "Submit"}
    </button>
  );
};

export default Button;
