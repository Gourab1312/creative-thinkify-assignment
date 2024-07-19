import React, { useEffect, useState } from "react";
import CreativeContext from "./creativeContext";
import useDebounce from "../hooks/useDebounce";

const CreativeProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [filterColor, setFilterColor] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [creativeList, setCreativeList] = useState([]);
  const [colors, setColors] = useState([]);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    setFilteredList(filterCreativeList());
  }, [creativeList, filterColor, debouncedSearchValue]);

  const updateCreativeList = (listData) => {
    setCreativeList(listData);
  };

  const filterCreativeList = () => {
    if (searchValue || filterColor) {
      return creativeList.filter((data) => {
        const isPresent = searchValue
          ? data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            data.subtitle.toLowerCase().includes(searchValue.toLowerCase())
          : false;
        if (
          searchValue &&
          !!filterColor &&
          isPresent &&
          filterColor === data.color
        ) {
          return data;
        } else if (!filterColor && searchValue && isPresent) {
          return data;
        } else if (!searchValue && filterColor && filterColor === data.color) {
          return data;
        }
      });
    } else return creativeList;
  };

  return (
    <CreativeContext.Provider
      value={{
        searchValue,
        setSearchValue,
        setFilterColor,
        filterColor,
        filteredList,
        creativeList,
        updateCreativeList,
        openDrawer,
        setOpenDrawer,
        colors,
        setColors,
      }}
    >
      {children}
    </CreativeContext.Provider>
  );
};

export default CreativeProvider;
