import React from "react";

function LogoContainer({ logoText }) {
  return (
    <h1 id="logo" className="navbar-brand mid-bold light m-0">
      {logoText}
    </h1>
  );
}

export default LogoContainer;
