import React from "react";
import "../styles/SearchBar.css";

const InputField = ({
  value,
  handleChange,
  label,
  type = "text",
  placeholder,
  ...restProps
}) => {
  return (
    <label>
      <div className="heading-2">{label}</div>
      <div className="wrapper mt-10">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
        />
      </div>
    </label>
  );
};

export default InputField;
