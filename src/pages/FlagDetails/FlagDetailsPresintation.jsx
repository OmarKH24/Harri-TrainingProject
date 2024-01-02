import React from "react";
import BackPage from "../../componunts/FlagDetailsComponent/BackPage";
function FlagDetailsPresintation({
  goBack,
  darkMode,
  apiError,
  errorMessage,
  countrey,
  nativeName,
  currency,
  borderNo,
  lang,
}) {
  // Return Elements:
  return (
    <div className="container flag detailes-size">
      <BackPage goBack={goBack} darkMode={darkMode} />
      <div
        id="flag-details"
        className="flag-details my-4 gap-5 d-flex flex-column flex-md-row justify-content-between justify-content-md-start flex-column flex-md-row"
      >
        {apiError ? (
          errorMessage
        ) : countrey ? (
          <>
            <div className="flag-image">
              <img alt="flag-img" src={`${countrey[0].flags.svg}`} />
            </div>
            <div className="flag-contnent w-75">
              <h1 className="flag-name h4 mid-bold">
                {countrey[0].name.common}
              </h1>
              <div className="my-4 flag-information d-flex justify-content-between">
                <ul className="px-5">
                  <li className="detailes-size">
                    <span className="home-det mid-bold">Native Name:</span>{" "}
                    {nativeName}
                  </li>
                  <li className="detailes-size">
                    <span className="home-det mid-bold">Population:</span>{" "}
                    {countrey[0].population}
                  </li>
                  <li className="detailes-size">
                    <span className="home-det mid-bold">Region:</span>{" "}
                    {countrey[0].region}
                  </li>
                  <li className="detailes-size">
                    <span className="home-det mid-bold">Sub Region:</span>{" "}
                    {countrey[0].subregion}
                  </li>
                  <li className="detailes-size">
                    <span className="home-det mid-bold">Capital:</span>{" "}
                    {countrey[0].capital[0]}
                  </li>
                </ul>
                <ul className="px-5">
                  <li className="detailes-size">
                    <span className="home-det mid-bold">Top level domain:</span>{" "}
                    {countrey[0].tld[0]}
                  </li>
                  <li className="detailes-size">
                    <span className="home-det mid-bold">Currencies:</span>{" "}
                    {currency}
                  </li>
                  <li className="detailes-size">
                    <span className="home-det mid-bold">Languages:</span> {lang}
                  </li>
                </ul>
              </div>
              <div className="borders d-flex gap-4 overflow-auto">
                <p className="detailes-size home-det mid-bold p-0 m-0 d-flex align-items-center">
                  Border Countries:{" "}
                </p>
                <ul className="d-flex justify-content-start flex-wrap gap-2 w-75 p-0 m-0">
                  {borderNo ? (
                    countrey[0].borders.map((border, index) => (
                      <li
                        key={index}
                        className={`detailes-size border-country ${
                          darkMode ? "spic-dark-mode" : "light"
                        } d-flex align-items-center py-2 px-4 all-Mid-shadow bg-white`}
                      >
                        {border}
                      </li>
                    ))
                  ) : (
                    <li
                      className={`detailes-size border-country ${
                        darkMode ? "spic-dark-mode" : "light"
                      } d-flex align-items-center py-2 px-4 all-Mid-shadow bg-white`}
                    >
                      No Borders!
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="w-100 h-100 my-4 d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlagDetailsPresintation;
