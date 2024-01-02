import React from "react";
// Components
import SearchBar from "../../componunts/SearchBar/SearchBar";
import RegionFilter from "../../componunts/RegionFilter/RegionFilter";
import FavioriteSectionContainer from "../../componunts/homeComponunts/FavioriteSection/FavioriteSectionContainer";

function HomePresintation({
  handaleSearchVlue,
  handaleFilterOption,
  regionFilterOptions,
  favCountry,
  handleFavCountry,
  favCountries,
  dispFaviorites,
  storeInLocalStorage,
  deleteCountry,
  visibleCountries,
  apiError,
  errorMessage,
  dispCountries,
}) {
  // Return Elements:
  return (
    <>
      <div className="searchSection my-4 d-flex flex-column flex-md-row gap-4 justify-content-between align-items-md-center">
        <SearchBar handaleSearchVlue={handaleSearchVlue} />
        <RegionFilter
          handaleFilterOption={handaleFilterOption}
          regionFilterOptions={regionFilterOptions}
        />
      </div>
      <div className="content d-flex gap-4">
        <FavioriteSectionContainer
          favCountry={favCountry}
          handleFavCountry={handleFavCountry}
          favCountries={favCountries}
          dispFaviorites={dispFaviorites}
          storeInLocalStorage={storeInLocalStorage}
          deleteCountry={deleteCountry}
        />
        <div className="detailes-contain">
          <div className="row" id="flag-row">
            {Array.isArray(visibleCountries) && visibleCountries.length > 0 ? (
              dispCountries()
            ) : apiError ? (
              errorMessage
            ) : visibleCountries.status === 404 ||
              visibleCountries.length === 0 ? (
              <div className="my-4 mid-bold">No results Found.</div>
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePresintation;
