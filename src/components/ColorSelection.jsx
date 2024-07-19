import React from "react";
import "../styles/ColorSelection.css";

const ColorSelection = ({ color, selectedColor }) => {
  // we are simply getting the colors and the selectedColor if any, as props and then adding border around that color pill
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
