import FavioriteSectionPrisentation from "./FavioriteSectionPrisentation";
import React from "react";
import { useDarkMode } from "../../../customeMethods/DarkModeContext";

function FavioriteSectionContainer({
  favCountry,
  handleFavCountry,
  favCountries,
  dispFaviorites,
  storeInLocalStorage,
}) {
  const { darkMode } = useDarkMode();
  let favoritBox = document.getElementById("favourit-countries");

  //Hover on Box
  function favDragOver(e) {
    e.preventDefault();
    favoritBox.classList.add("hovered");
  }

  //Leave the Box
  function favDragLeave() {
    favoritBox.classList.remove("hovered");
  }

  //Dropping the Item
  async function favDroped(e) {
    e.preventDefault();
    favoritBox.classList.remove("hovered");
    await storeInLocalStorage(favCountry);
    handleFavCountry({
      area: 0,
      img: "",
      name: "country",
    });
  }

  return (
    <FavioriteSectionPrisentation
      darkMode={darkMode}
      favDragOver={favDragOver}
      favDragLeave={favDragLeave}
      favDroped={favDroped}
      favCountries={favCountries}
      dispFaviorites={dispFaviorites}
    />
  );
}

export default FavioriteSectionContainer;
