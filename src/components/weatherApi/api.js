import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getAutoCompleteApi,
  getCitySearch,
  getCurrentCityWeather,
} from "../../mock/mock";

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
  const query = `?apikey=${weatherApi.baseKey}&q=${city}`;

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
  const query = `?apikey=${weatherApi.baseKey}&q=${locationPartialName}`;

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
