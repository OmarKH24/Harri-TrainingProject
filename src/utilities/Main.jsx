import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
//Pages
import HomeContainer from "../pages/Home/HomeContainer";
import FlagDetailsContainer from "../pages/FlagDetails/FlagDetailsContainer";

function Main() {
  return (
    <main className={`container`}>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="Home" element={<HomeContainer />} />
        <Route path="FlagDetails" element={<FlagDetailsContainer />} />
      </Routes>
    </main>
  );
}

export default Main;
