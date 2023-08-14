"use client";

import { SearchManufacturer } from ".";
import { useState } from "react";

const SearchBar = () => {
  const handleSearch = () => {};
  const [manufacturer, setManufacturer] = useState("");

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer manufacturer="" setManufacturer={setManufacturer} />
      </div>
    </form>
  );
};
export default SearchBar;