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
          weatherText: action.payload.WeatherText,
          temperature: action.payload.Temperature.Metric.Value,
        },
      };
    }

    case "SET_CURRENT_WEATHER_NAME": {
      // return {
      //   ...state,
      //   currentWeatherData: {
      //     cityName: action.payload,
      //   },
      // };
      return {
        ...state,
        cityName: action.payload,
      };
    }

    default:
      return state;
  }
};

export default weatherRducer;
