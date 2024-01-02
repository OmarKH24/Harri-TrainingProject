import React, { useState } from "react";
import { useDarkMode } from "../../customeMethods/DarkModeContext";
//components
import Logo from "../navBarComponunts/Logo/Logo";
import DarkModeBtn from "../navBarComponunts/DarkModeBtn/DarkModeBtn";

function NavBarContainer() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  let [logoText, setLogoText] = useState("Where in the world?");

  // Return Elements:
  return (
    <nav
      id="nav"
      className={`bottom-shadow navbar navbar-expand-lg bg-body-tertiary position-sticky ${
        darkMode ? " spic-dark-mode" : "light"
      } bg-white`}
    >
      <div className="container">
        <Logo logoText={logoText} />
        <DarkModeBtn darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
}

export default NavBarContainer;
