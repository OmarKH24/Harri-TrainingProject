import FlagDetailsPresintation from "./FlagDetailsPresintation";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCountryDetails } from "../../apis/ApisHandale";
import { useDarkMode } from "../../customeMethods/DarkModeContext";

function FlagDetailsContainer() {
  const { darkMode } = useDarkMode();
  //URL
  let [searchParams, setSearchParams] = useSearchParams();
  let code = searchParams.get("countryID");
  //store country
  let [countrey, setCountrey] = useState();
  let [apiError, setApiError] = useState(false);
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

  /* get country */
  async function getCountry() {
    try {
      let { data } = await getCountryDetails(code);
      setCountrey(data);
    } catch (error) {
      setApiError(true);
      console.error("Fetch operation failed: ", error);
    }
  }
  /* Use Effects */
  useEffect(() => {
    getCountry();
  }, []);

  // Get some Details "Borders, Native Name, Currency, Languges"
  let borderNo;
  let nativeName = "";
  let currency = "";
  let lang = "";

  if (countrey !== undefined) {
    // get Borders
    borderNo = countrey[0].borders;

    //get NativeName
    for (const coName in countrey[0].name.nativeName) {
      nativeName = countrey[0].name.nativeName[coName].common;
    }
    //get currencies
    let noCurr = 0;
    for (const type in countrey[0].currencies) {
      if (noCurr >= 1) {
        currency += ", ";
      }
      currency += type;
      noCurr++;
    }
    //get Languges
    let noLang = 0;
    for (const langType in countrey[0].languages) {
      if (noLang >= 1) {
        lang += ", ";
      }
      lang += countrey[0].languages[langType];
      noLang++;
    }
  }

  // go back to home page
  const navigate = useNavigate();
  function goBack() {
    navigate({
      pathname: "/Home",
    });
  }
  return (
    <FlagDetailsPresintation
      goBack={goBack}
      apiError={apiError}
      errorMessage={errorMessage}
      countrey={countrey}
      nativeName={nativeName}
      currency={currency}
      borderNo={borderNo}
      darkMode={darkMode}
      lang={lang}
    />
  );
}

export default FlagDetailsContainer;
