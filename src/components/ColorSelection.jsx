import React from "react";
import "../styles/ColorSelection.css";

const ColorSelection = ({ color, selectedColor }) => {
  return (
    <span
      data-color={color}
      className={`color-selection ${
        color === selectedColor ? "selected-color" : ""
      }`}
      style={{ backgroundColor: color }}
    ></span>
  );
};

export default ColorSelection;
