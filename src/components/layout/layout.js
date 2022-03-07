import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const weatherApi = {
    baseKey: "7j7jodfnbvOacTr6XdFeOJ7XmqQhTSMg",
    autoCompleteKey:
      "http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
    currentWeatherKey:
      "http://dataservice.accuweather.com/currentconditions/v1/",
  };

  const getWeatherDetails = async (city) => {
    setQuery(`${city}?apiKey=${weatherApi.baseKey}`);

    const res = await fetch(weatherApi.currentWeatherKey + query);
    const data = await res.json();

    return data;
  };

  const getWeatherAutoComplete = async (locationPartialName) => {
    setQuery(`apiKey=${weatherApi.baseKey}&q=${locationPartialName}`);

    console.log(query);

    const res = await fetch(weatherApi.autoCompleteKey + query);
    const data = await res.json();

    return data[0];
  };

  const handleChange = async (event) => {
    console.log(event.target.value);
    let options = await getWeatherAutoComplete(event.target.value);
    //let currentWeather = getWeatherDetails(event.target.value);
    console.log(options);
  };

  const search = (event) => {
    if (event.key === "Enter") {
    }
  };

  const dateBuilder = (date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];
    let day_number = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day} ${day_number} ${month} ${year}`;
  };

  return (
    <div className="app">
      <h1>Dashboard</h1>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={handleChange}
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
          <div className="location">Tel Aviv City</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temperature">15°c</div>
          <div className="weather">Sunny</div>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
