import React from "react";
import "../styles/Button.css";

const Button = ({ disabled, label, handleClick }) => {
  return (
    // This logic basically covers when to enable and disable the add creative and done button, and the extra padding as per the ui in the done button
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
