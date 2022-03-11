export const addWeather = (weather) => {
  return {
    type: "ADD_WEATHER",
    payload: weather,
  };
};

export const addFavorite = (weather) => {
  return {
    type: "ADD_FAVORITE",
    payload: weather,
  };
};

export const removeFavorite = (weather) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: weather,
  };
};

export const setCurrentWeatherData = (weatherData) => {
  return {
    type: "SET_CURRENT_WEATHER_DATA",
    payload: weatherData[0],
  };
};

export const setCurrentWeatherName = (weatherName) => {
  return {
    type: "SET_CURRENT_WEATHER_NAME",
    payload: weatherName,
  };
};
