import HomePresintation from "./HomePresintation";
import React, { useEffect, useState, useRef } from "react";
// Custom hooks
import { useDarkMode } from "../../customeMethods/DarkModeContext";

// API methods
import { getAllCountries, getCountryByName } from "../../apis/ApisHandale";

//components
import CardContainer from "../../componunts/Card/CardContainer";

function HomeContainer() {
  /** Variables **/
  const { darkMode } = useDarkMode();
  let [countries, setCountries] = useState([]);
  let [visibleCountries, setvisibleCountries] = useState([]);
  let [searchResultCountries, setsearchResultCountries] = useState([]);
  let [apiError, setapiError] = useState(false);
  //faviorite section
  let [favCountry, setFavCountry] = useState({
    area: 0,
    img: "",
    name: "country",
  });
  //search & filter variables
  let [val, setVal] = useState(""); //search value
  const timeoutId = useRef(null);
  let [filterOption, setFilterOption] = useState("noValue");
  const regionFilterOptions = [
    "noValue",
    "fav",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  let errorMessage = (
    <div class="w-100 h-100 d-flex flex-column align-items-center">
      <div class="alert alert-danger my-4 mid-bold w-100 d-flex justify-content-center">
        Error!!!
      </div>
      <div class="my-4 mid-bold">
        Theres a proplem! Please wait for us to solve the proplem.
      </div>
    </div>
  );
  // get faviorite countries from local storage
  let [favCountries, setFavCountries] = useState([]);
  let jsonlocCountries = localStorage.getItem("favCountries");
  if (jsonlocCountries) {
    favCountries = JSON.parse(jsonlocCountries);
  }
  /***** Use Effects *****/
  //initial render
  useEffect(() => {
    getCountries();
    handaleFilterOption(filterOption);
  }, []);

  //search value update =>  search country
  useEffect(() => {
    searchCountry();
  }, [val]);

  //change in filter option OR search results array => filter the countries we have
  useEffect(() => {
    handaleFilterOption(filterOption);
  }, [searchResultCountries, filterOption]);

  /* function to get all originalCountries: */
  async function getCountries() {
    try {
      let data = await getAllCountries();
      setCountries(data);
      setvisibleCountries(data);
    } catch (error) {
      setapiError(true);
      console.error("Error in fetching originalCountries:", error);
    }
  }

  /** ====================== Favorite Section ====================== **/
  /** faviorite country and handale it  **/
  //function to handale the favCountry come from child and save it into favCountry variable
  const handleFavCountry = (country) => {
    setFavCountry(country);
  };

  /**  Dealing with Local Storage **/
  const storeInLocalStorage = (country) => {
    if (!favCountries) {
      favCountries = [];
    }
    let isExist = favCountries.findIndex(
      (favCountry) => favCountry.area === country.area
    );
    if (isExist !== -1) {
      return;
    }
    const updatedFavCountries = [...favCountries, country];
    setFavCountries(updatedFavCountries); // Update the state here

    // Save the updated state to localStorage
    let jsonArrayFav = JSON.stringify(updatedFavCountries);
    localStorage.setItem("favCountries", jsonArrayFav);
  };

  function deleteCountry(selectedArea) {
    let indexToDelete = favCountries.findIndex(
      (country) => country.area == selectedArea
    );

    if (indexToDelete !== -1) {
      favCountries.splice(indexToDelete, 1);
      let jsonArrayFav = JSON.stringify(favCountries);
      localStorage.setItem("favCountries", jsonArrayFav);
      setFavCountries(favCountries);
    }
  }
  /** ====================== filter Section ====================== **/
  function clearResults() {
    setvisibleCountries(countries);
  }

  function handaleFilterOption(option) {
    setFilterOption(option);
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    if (
      searchResultCountries.length === 0 ||
      !searchResultCountries ||
      val === ""
    ) {
      // If no search has been made yet, apply filter to all countries
      if (option === "fav") {
        const filteredFav = favCountries.length
          ? countries.filter((country) =>
              favCountries.some(
                (favCountry) => favCountry.area === country.area
              )
            )
          : [];

        setvisibleCountries(filteredFav);
      } else if (option === "noValue") {
        clearResults();
      } else if (regions.includes(option)) {
        const filteredCountries = countries.filter(
          (country) => country.region === option
        );
        setvisibleCountries(filteredCountries);
      }
    } else {
      if (option === "fav") {
        const filteredFav = searchResultCountries.filter((country) =>
          favCountries.some((favCountry) => favCountry.area === country.area)
        );
        setvisibleCountries(filteredFav);
      } else if (option === "noValue") {
        setvisibleCountries(searchResultCountries);
      } else if (regions.includes(option)) {
        const filteredCountries = searchResultCountries.filter(
          (country) => country.region === option
        );
        setvisibleCountries(filteredCountries);
      }
    }
  }

  /** ====================== Search Section ====================== **/
  function handaleSearchVlue(value) {
    if (value === "") {
      clearResults();
    }
    setVal(value);
    console.log(value);
  }

  function debounce(func, delay) {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      func();
    }, delay);
  }
  async function searchCountry() {
    if (val.trim() === "") {
      return;
    }
    debounce(async () => {
      try {
        let data = await getCountryByName(val);
        if (data.status === 404 || data.length === 0) {
          setvisibleCountries([]);
        } else {
          setsearchResultCountries(data);
        }
      } catch (error) {
        setvisibleCountries([]);
        setapiError(true);
        console.error("Error in fetching countries by name:", error);
      }
    }, 400); // Adjust the delay as needed
  }

  /*====================== Display Functions ======================*/
  function dispCountries() {
    return visibleCountries.map((country, index) => (
      <CardContainer
        key={index}
        country={country}
        handleFavCountry={handleFavCountry}
        favCountries={favCountries}
        dispFaviorites={dispFaviorites}
        storeInLocalStorage={storeInLocalStorage}
        deleteCountry={deleteCountry}
      />
    ));
  }
  function dispFaviorites() {
    return favCountries.map((countrey, index) => (
      <div key={index} className="d-flex justify-content-md-between">
        <div className="d-flex gap-2 align-items-center w-75">
          <div className="fav-image">
            <img alt="fav-img" src={`${countrey.img}`} />
          </div>
          <h5 className="card-title p-0 m-0 mid-bold text-truncate detailes-size">
            {countrey.name}
          </h5>
        </div>
        <button
          onClick={() => deleteCountry(countrey.area)}
          className={`bg-transparent py-0 px-2 mid-bold detailes-size ${
            darkMode ? " spic-dark-mode" : "light"
          }`}
        >
          x
        </button>
      </div>
    ));
  }
  return (
    <HomePresintation
      handaleSearchVlue={handaleSearchVlue}
      handaleFilterOption={handaleFilterOption}
      regionFilterOptions={regionFilterOptions}
      favCountry={favCountry}
      handleFavCountry={handleFavCountry}
      favCountries={favCountries}
      dispFaviorites={dispFaviorites}
      storeInLocalStorage={storeInLocalStorage}
      deleteCountry={deleteCountry}
      visibleCountries={visibleCountries}
      apiError={apiError}
      errorMessage={errorMessage}
      dispCountries={dispCountries}
    />
  );
}
export default HomeContainer;
