import React from "react";

const SearchBar = () => {
  const searchBarStyles = {
    marginBottom: "20px"
  };

  return (
    <nav className="light-blue accent-4" style={searchBarStyles}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input type="search" id="search" />
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
