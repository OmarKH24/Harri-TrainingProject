import React from "react";
import { useDarkMode } from "../../customeMethods/DarkModeContext";

function SearchBarContainer({ handaleSearchVlue }) {
  const { darkMode } = useDarkMode();

  return (
    <>
      <div className="search w-50 gap-1 d-flex flex-column flex-md-row flex-wrap justify-content-start justify-content-md-between g-4 g-md-0 align-items-md-center my-4">
        <div
          className={`input-group ${darkMode ? "" : "light"} bg-transparent`}
        >
          <div
            className={`custome-search bg-white d-flex justify-content-start ${
              darkMode ? "spic-dark-mode" : "light"
            }`}
          >
            <span
              className={`${
                darkMode ? " spic-dark-mode" : "light"
              } border-0 input-group-text bg-white p-4 gray-color`}
              style={{ fontFamily: "FontAwesome" }}
            >
              <i className="fas fa-search" />
            </span>
            <div className="form-floating gray-color" id="search-bar">
              <input
                onChange={(e) => handaleSearchVlue(e.target.value)}
                className={`${
                  darkMode ? " spic-dark-mode" : "light"
                } form-control border-0`}
                id="floatingInputGroup1"
                type="search"
                placeholder="Search for a country..."
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBarContainer;
