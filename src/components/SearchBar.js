import React from "react";

function SearchBar( props ) {

  return (
    <input onChange={props.onInputChange}></input>
  );
}

export default SearchBar;