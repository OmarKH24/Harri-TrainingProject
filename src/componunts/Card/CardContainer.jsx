import CardPresintation from "./CardPresintation";
import React, { useState } from "react";
import { useDarkMode } from "../../customeMethods/DarkModeContext";
import { useNavigate } from "react-router-dom";

function CardContainer(props) {
  // go to country details page
  const navigate = useNavigate();
  function goToCountry(code) {
    navigate({
      pathname: "/FlagDetails",
      search: `?countryID=${code}`,
    });
  }

  //get Variables from Parent
  const { name, area, altSpellings } = props.country;

  let favCountries = props.favCountries;
  //Dark or not
  const { darkMode } = useDarkMode();

  /** ============================ Favorite Section ============================ **/
  //favCountry variable to handale changes in favivorite countries "Drag & Drop, Clicked btn"
  let [favCountry, setFavCountry] = useState({
    area: 0,
    img: "",
    name: "country",
  });

  //Start of Dragging
  function dragCard(e, area, img, name) {
    e.target.style.opacity = 0.5;
    img = img.toLowerCase();
    let imagURL = `https://flagcdn.com/${img}.svg`;
    favCountry.area = area;
    favCountry.img = imagURL;
    favCountry.name = name;
    props.handleFavCountry(favCountry); // Pass the favCountry data to the parent component
  }
  //End of Dragging
  function endDragCard(e) {
    favCountry = {
      area: 0,
      img: "",
      name: "country",
    };
    e.target.style.opacity = 1;
  }

  // Handale the Star Fav Btn click
  function handaleFavBtn(e, area, img, name) {
    if (e.target.classList.contains("clicked")) {
      e.target.classList.remove("clicked");
      props.deleteCountry(area);
    } else {
      e.target.classList.add("clicked");
      let favClicked = {
        area: 0,
        img: "",
        name: "",
      };
      img = img.toLowerCase();
      let imagURL = `https://flagcdn.com/${img}.svg`;
      favClicked.area = area;
      favClicked.img = imagURL;
      favClicked.name = name;
      props.storeInLocalStorage(favClicked);
    }
  }

  let favBtnContent = ``;
  let isFav = favCountries.findIndex((element) => element.area == area);

  if (isFav !== -1) {
    favBtnContent = (
      <i
        onClick={(e) => handaleFavBtn(e, area, altSpellings[0], name.official)}
        className="fa-solid fa-star clicked"
      ></i>
    );
  } else {
    favBtnContent = (
      <i
        onClick={(e) => handaleFavBtn(e, area, altSpellings[0], name.official)}
        className="fa-solid fa-star"
      ></i>
    );
  }

  return (
    <CardPresintation
      darkMode={darkMode}
      dragCard={dragCard}
      endDragCard={endDragCard}
      country={props.country}
      goToCountry={goToCountry}
      favBtnContent={favBtnContent}
    />
  );
}

export default CardContainer;
