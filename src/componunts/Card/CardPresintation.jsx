import React from "react";

function CardPresintation({
  darkMode,
  dragCard,
  endDragCard,
  country,
  goToCountry,
  favBtnContent,
}) {
  //get Variables from Parent
  const { name, area, altSpellings, flags, population, region, capital, ccn3 } =
    country;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xsm-12 mb-3">
        <div
          draggable="true"
          onDragStart={(e) => dragCard(e, area, altSpellings[0], name.official)}
          onDragEnd={(e) => endDragCard(e)}
          className="card border-0 position-relative m-1 m-xl-3 mt-0 ${darkModeClass}"
        >
          <div className="image" onClick={() => goToCountry(ccn3)}>
            <img loading="lazy" alt="home-img" src={`${flags.svg}`} />
          </div>
          <div
            onClick={() => goToCountry(ccn3)}
            className={`card-body flag-card form ${
              darkMode ? " spic-dark-mode" : "light"
            }`}
          >
            <h5 className="card-title px-2 my-1 mid-bold text-truncate home-size">
              {name.official}
            </h5>
            <ul className="px-2 mt-3 mb-5">
              <li className="home-size">
                <span className="mid-bold home-size">Population:</span>{" "}
                {population}
              </li>
              <li className="home-size">
                <span className="mid-bold home-size">Region:</span> {region}
              </li>
              <li className="home-size">
                <span className="mid-bold home-size">Capital:</span> {capital}
              </li>
            </ul>
          </div>
          <div
            className="fav-click d-md-none fav-star bg-transparent position-absolute bottom-0 end-0"
            style={{ fontFamily: "FontAwesome" }}
          >
            {favBtnContent}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPresintation;
