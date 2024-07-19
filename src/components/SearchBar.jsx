import React, { useContext } from "react";
import CreativeContext from "../context/creativeContext";
import InputField from "./InputField";

const SearchBar = ({ label }) => {
  const { searchValue, setSearchValue } = useContext(CreativeContext);

  // we are taking the searchValue and setSearchValue from the global context and using them as the user types something in the filter input
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <InputField
      value={searchValue}
      label={label}
      handleChange={handleChange}
      placeholder="Search across title and subtitle"
    />
  );
};

export default SearchBar;
