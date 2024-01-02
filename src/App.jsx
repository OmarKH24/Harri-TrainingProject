import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter, Routes, and Route

//Componunt
import Header from "./utilities/Header.jsx";
import Main from "./utilities/Main.jsx";

import { DarkModeProvider } from "./customeMethods/DarkModeContext.jsx";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Header />
        <Main />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
