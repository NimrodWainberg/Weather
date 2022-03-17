import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DropDown from "../small_components/dropDown";
import { FavoriteButton } from "../small_components/buttons";
import OutlinedCard from "../small_components/weatherCard";
import {
  getAutoCompleteApi,
  getCitySearch,
  getCurrentCityWeather,
} from "../../mock/mock";
import { addAutoCompleteOptions } from "../../actions/autoCompleteActions";
import {
  setCurrentWeatherData,
  setCurrentWeatherName,
  addFavorite,
  removeFavorite,
} from "../../actions/weatherActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const currentWeatherDetails = useSelector((state) => state.weather);
  const favorites = useSelector((state) => state.favorites);

  console.log(currentWeatherDetails);
  const cityName = currentWeatherDetails.currentWeatherData.cityName;
  const weatherText = currentWeatherDetails.currentWeatherData.weatherText;
  const temperature = currentWeatherDetails.currentWeatherData.temperature;

  // const notify = () => toast("Wow so easy!");

  const handleFavorite = (isFavorites) => {
    if (isFavorites) {
      dispatch(addFavorite(currentWeatherDetails));
      console.log(`favorites: ${favorites}`);
    } else {
      dispatch(removeFavorite(currentWeatherDetails));
      console.log(`favorites: ${favorites}`);
    }
  };

  const navigate = useNavigate();

  const handleClick = (event) => {
    console.log(event);
    navigate(`/${event.target.value}`);
  };

  const weatherApi = {
    baseKey: "7j7jodfnbvOacTr6XdFeOJ7XmqQhTSMg",
    autoCompleteKey:
      "https://dataservice.accuweather.com/locations/v1/cities/autocomplete",
    cityIdWeatherSearchKey:
      "http://dataservice.accuweather.com/locations/v1/cities/search",
    currentWeatherKey:
      "https://dataservice.accuweather.com/currentconditions/v1/",
  };

  const getWeatherDetails = async (city) => {
    setQuery(`?apikey=${weatherApi.baseKey}&q=${city}`);

    try {
      const res = await fetch(weatherApi.cityIdWeatherSearchKey + query);
      const data = await res.json();
      // const data = getCitySearch();
      console.log(`data:${JSON.stringify(data)}`);
      const cityName = data[0]?.LocalizedName;
      dispatch(setCurrentWeatherName(cityName));
      const cityId = data[0]?.Key;
      console.log(`: ${cityId}`);

      //setQuery(`${cityId}?apikey=${weatherApi.baseKey}`);
      const apiRequest = `${cityId}?apikey=${weatherApi.baseKey}`;
      console.log(`: ${apiRequest}`);
      //const response = await fetch(weatherApi.currentWeatherKey + apiRequest);
      //const cityData = await response.json();
      const cityData = getCurrentCityWeather();
      console.log(`cityData:${JSON.stringify(cityData)}`);

      return cityData;
    } catch (err) {
      toast.error({ toastId: "error" }, "could not find city");
    }
  };

  const getWeatherAutoComplete = async (locationPartialName) => {
    setQuery(`?apikey=${weatherApi.baseKey}&q=${locationPartialName}`);

    console.log(`query:${query}`);

    try {
      console.log(weatherApi.autoCompleteKey + query);
      //const res = await fetch(weatherApi.autoCompleteKey + query);

      // const data = await res.json();
      const data = getAutoCompleteApi();
      console.log(`data:${data}`);
      return data;
    } catch (err) {
      toast.error({ toastId: "error" }, "auto complete failed");
    }
  };

  const handleChange = async (event) => {
    // notify(event)
    // <ToastContainer/>
    console.log(event.target.value);
    let options = await getWeatherAutoComplete(event.target.value);
    let optionsDropDown = options.map((option) => option.LocalizedName);
    console.log(`optionsDropDown: ${optionsDropDown}`);
    dispatch(addAutoCompleteOptions(optionsDropDown));
  };

  const search = async (event) => {
    if (event.key === "Enter") {
      const currentCityWeatherDetails = await getWeatherDetails(
        event.target.value
      );
      console.log(currentCityWeatherDetails);
      if (currentCityWeatherDetails) {
        dispatch(setCurrentWeatherData(currentCityWeatherDetails));
      } else {
        toast.error({ toastId: "error" }, "auto complete failed");
      }
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
      <h1>Home </h1>
      <DropDown />
      <Link to="/favorites">Favorites</Link>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={handleChange}
            onKeyPress={search}
          />
          <FavoriteButton onClick={handleFavorite} />
        </div>
        <div className="location-box">
          <div className="location">
            {weatherText && cityName ? cityName : "Tel Aviv"} City
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temperature">{temperature ? temperature : ""} °C</div>
          <div className="weather"> {weatherText ? weatherText : ""}</div>
        </div>
        {/* <button onClick={notify}>Notify!</button> */}
        <div className="weahterCat">
          <OutlinedCard />
        </div>
        <ToastContainer />
      </main>
    </div>
  );
};

export default Home;
