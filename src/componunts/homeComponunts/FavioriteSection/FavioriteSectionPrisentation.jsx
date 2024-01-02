import React from "react";

function FavioriteSectionPrisentation({
  darkMode,
  favDragOver,
  favDragLeave,
  favDroped,
  favCountries,
  dispFaviorites,
}) {
  return (
    <aside
      className={`fav ${
        darkMode ? " spic-dark-mode" : "light"
      } f-flex flex-column gap-2 d-none d-md-block p-1 d-none d-md-block bg-white`}
    >
      <div className="px-3 py-4">
        <h4 className="h5 mid-bold home-size">Favourites</h4>
      </div>
      <div
        onDragOver={favDragOver}
        onDragLeave={favDragLeave}
        onDrop={favDroped}
        className="px-0 favourit-content d-flex flex-column gap-2"
        id="favourit-countries"
      >
        {favCountries ? dispFaviorites() : ""}
      </div>
    </aside>
  );
}

export default FavioriteSectionPrisentation;
