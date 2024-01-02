import React from "react";
import axios from "axios";

export const getAllCountries = () => {
  return fetch("https://restcountries.com/v3.1/all").then((response) =>
    response.json()
  );
};

export const getCountryByName = (countryName) => {
  return fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(
    (response) => response.json()
  );
};

export const getCountryDetails = async (code) => {
  return axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
};

const ApisHandale = () => {
  return <div>ApisHandle Component</div>;
};

export default ApisHandale;
