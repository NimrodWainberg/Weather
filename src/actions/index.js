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

export const setCurrentWeather = (weather) => {
  return {
    type: "SET_CURRENT_WEATHER",
    payload: weather,
  };
};
