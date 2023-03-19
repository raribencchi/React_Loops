import React from "react";

export default function Countries() {
  let countries = [
    {
      countryName: "France",
      city: "Paris"
    },
    {
      countryName: "USA",
      city: "Washington DC"
    },
    {
      countryName: "Australia",
      city: "Canberra"
    },

    {
      countryName: "Japan",
      city: "Tokyo"
    }
  ];
  return (
    <div className="countries">
      <ul>
        {countries.map(function (country, index) {
          return (
            <li key={index}>
              {" "}
              The capital city of {country.countryName} is {country.city}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
