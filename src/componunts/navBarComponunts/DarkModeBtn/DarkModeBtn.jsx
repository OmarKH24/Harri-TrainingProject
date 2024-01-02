import React from "react";

function DarkModeBtnContainer({ darkMode, toggleDarkMode }) {
  return (
    <div className="mode d-flex align-items-center">
      <button
        type="button"
        onClick={toggleDarkMode}
        className={`btn ${darkMode ? " spic-dark-mode" : "light"}`}
        id="mode-btn"
      >
        <i className={`mx-2 fa-regular ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
        Dark Mode
      </button>
    </div>
  );
}

export default DarkModeBtnContainer;
