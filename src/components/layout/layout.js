import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GroupButtons from "../small_components/buttons";
import AutoComplete from "../autoComplete/autoComplete";
import { getAutoCompleteApi } from "../../mock/mock";

const Layout = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const notify = () => toast("Wow so easy!");

  const navigate = useNavigate();

  const handleClick = (event) => {
    console.log(event);
    navigate(`/${event.target.value}`);
  };

  const weatherApi = {
    baseKey: "7j7jodfnbvOacTr6XdFeOJ7XmqQhTSMg",
    autoCompleteKey:
      "https://dataservice.accuweather.com/locations/v1/cities/autocomplete",
    currentWeatherKey:
      "https://dataservice.accuweather.com/currentconditions/v1/",
  };

  const getWeatherDetails = async (city) => {
    setQuery(`${city}?apikey=${weatherApi.baseKey}`);

    const res = await fetch(weatherApi.currentWeatherKey + query);
    const data = await res.json();

    return data;
  };

  const getWeatherAutoComplete = async (locationPartialName) => {
    setQuery(`?apikey=${weatherApi.baseKey}&q=${locationPartialName}`);

    console.log(`query:${query}`);

    try {
      console.log(weatherApi.autoCompleteKey + query);
      //const res = await fetch(weatherApi.autoCompleteKey + query);

      // const data = await res.json();
      const data = getAutoCompleteApi();
      return data;
    } catch (err) {
      toast.error({ id: "error" }, "auto complete failed");
    }
  };

  const handleChange = async (event) => {
    // notify(event)
    // <ToastContainer/>
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
      <div className="dashboard">
        <h1>Dashboard</h1>
        <AutoComplete />
        <GroupButtons onClick={(e) => handleClick(e)}></GroupButtons>
      </div>
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
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
