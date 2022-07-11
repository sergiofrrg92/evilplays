import React from "react";

function SearchBar( props ) {

  return (
    <input className="search-bar" placeholder="Search..." onChange={props.onInputChange}></input>
  );
}

export default SearchBar;