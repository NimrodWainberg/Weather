const weatherRducer = (
  state = { weathers: [], favorites: [], currentWeatherData: {} },
  action
) => {
  switch (action.type) {
    case "SET_CURRENT_WEATHER_DATA": {
      console.log(`action.payload: ${JSON.stringify(action.payload)}`);
      return {
        ...state,
        currentWeatherData: {
          ...state.currentWeatherData,
          weatherText: action?.payload?.WeatherText,
          temperature: action?.payload?.Temperature.Metric.Value,
        },
      };
    }

    case "SET_CURRENT_WEATHER_NAME": {
      return {
        ...state,
        currentWeatherData: {
          ...state.currentWeatherData,
          cityName: action?.payload,
        },
      };
    }

    case "ADD_FAVORITE": {
      return { ...state, favorites: [...state.favorites, action.payload] };
    }

    case "REMOVE_FAVORITE": {
      return {
        ...state,
        favorites: state.favorites.filter(
          (element) => element.cityName !== action.payload.cityName
        ),
      };
    }

    default:
      return state;
  }
};

export default weatherRducer;
