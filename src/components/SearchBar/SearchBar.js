import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearchTerm, placeholderText }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeHandler = (e) => setSearchTerm(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearchTerm(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={onSubmitHandler} className="search-bar">
      <input onChange={onChangeHandler} value={searchTerm} type="search" placeholder={placeholderText || ""} />
    </form>
  );
};

export default SearchBar;
