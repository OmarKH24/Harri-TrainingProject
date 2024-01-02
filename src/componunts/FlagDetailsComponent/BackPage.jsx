import React from "react";

export default function BackPage({ darkMode, goBack }) {
  return (
    <div
      className={`back btn bg-transparent ${
        darkMode ? " spic-dark-mode" : "light"
      } my-4 all-light-shadow border border-dark`}
    >
      <button
        onClick={() => goBack()}
        className={`border-0 bg-transparent ${
          darkMode ? "spic-dark-mode" : "light"
        }`}
      >
        <i className="fa fa-long-arrow-left mx-1" aria-hidden="true" />
        Back
      </button>
    </div>
  );
}
