import React, { useState } from "react";

function Search({ setCity }) {
  let [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(val);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="searchContainer">
          <input
            type="text"
            name="search"
            id="search"
            className="searchbar"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          <button type="submit">
            <img className="searchImg" src="search.png" alt="search" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
