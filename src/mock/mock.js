export function getAutoCompleteApi() {
  return [
    {
      Version: 1,
      Key: "215854",
      Type: "City",
      Rank: 31,
      LocalizedName: "Tel Aviv",
      Country: {
        ID: "IL",
        LocalizedName: "Israel",
      },
      AdministrativeArea: {
        ID: "TA",
        LocalizedName: "Tel Aviv",
      },
    },
    {
      Version: 1,
      Key: "3431644",
      Type: "City",
      Rank: 45,
      LocalizedName: "Telanaipura",
      Country: {
        ID: "ID",
        LocalizedName: "Indonesia",
      },
      AdministrativeArea: {
        ID: "JA",
        LocalizedName: "Jambi",
      },
    },
    {
      Version: 1,
      Key: "300558",
      Type: "City",
      Rank: 45,
      LocalizedName: "Telok Blangah New Town",
      Country: {
        ID: "SG",
        LocalizedName: "Singapore",
      },
      AdministrativeArea: {
        ID: "05",
        LocalizedName: "South West",
      },
    },
    {
      Version: 1,
      Key: "325876",
      Type: "City",
      Rank: 51,
      LocalizedName: "Telford",
      Country: {
        ID: "GB",
        LocalizedName: "United Kingdom",
      },
      AdministrativeArea: {
        ID: "TFW",
        LocalizedName: "Telford and Wrekin",
      },
    },
    {
      Version: 1,
      Key: "169072",
      Type: "City",
      Rank: 51,
      LocalizedName: "Telavi",
      Country: {
        ID: "GE",
        LocalizedName: "Georgia",
      },
      AdministrativeArea: {
        ID: "KA",
        LocalizedName: "Kakheti",
      },
    },
    {
      Version: 1,
      Key: "230611",
      Type: "City",
      Rank: 51,
      LocalizedName: "Telsiai",
      Country: {
        ID: "LT",
        LocalizedName: "Lithuania",
      },
      AdministrativeArea: {
        ID: "TE",
        LocalizedName: "Telšiai",
      },
    },
    {
      Version: 1,
      Key: "2723742",
      Type: "City",
      Rank: 55,
      LocalizedName: "Telégrafo",
      Country: {
        ID: "BR",
        LocalizedName: "Brazil",
      },
      AdministrativeArea: {
        ID: "PA",
        LocalizedName: "Pará",
      },
    },
    {
      Version: 1,
      Key: "186933",
      Type: "City",
      Rank: 55,
      LocalizedName: "Tela",
      Country: {
        ID: "HN",
        LocalizedName: "Honduras",
      },
      AdministrativeArea: {
        ID: "AT",
        LocalizedName: "Atlántida",
      },
    },
    {
      Version: 1,
      Key: "3453754",
      Type: "City",
      Rank: 55,
      LocalizedName: "Telaga Asih",
      Country: {
        ID: "ID",
        LocalizedName: "Indonesia",
      },
      AdministrativeArea: {
        ID: "JB",
        LocalizedName: "West Java",
      },
    },
    {
      Version: 1,
      Key: "3453755",
      Type: "City",
      Rank: 55,
      LocalizedName: "Telagamurni",
      Country: {
        ID: "ID",
        LocalizedName: "Indonesia",
      },
      AdministrativeArea: {
        ID: "JB",
        LocalizedName: "West Java",
      },
    },
  ];
}

export function getCitySearch() {
  return [
    {
      Version: 1,
      Key: "215854",
      Type: "City",
      Rank: 31,
      LocalizedName: "Tel Aviv",
      EnglishName: "Tel Aviv",
      PrimaryPostalCode: "",
      Region: {
        ID: "MEA",
        LocalizedName: "Middle East",
        EnglishName: "Middle East",
      },
      Country: {
        ID: "IL",
        LocalizedName: "Israel",
        EnglishName: "Israel",
      },
      AdministrativeArea: {
        ID: "TA",
        LocalizedName: "Tel Aviv",
        EnglishName: "Tel Aviv",
        Level: 1,
        LocalizedType: "District",
        EnglishType: "District",
        CountryID: "IL",
      },
      TimeZone: {
        Code: "IST",
        Name: "Asia/Jerusalem",
        GmtOffset: 2,
        IsDaylightSaving: false,
        NextOffsetChange: "2022-03-25T00:00:00Z",
      },
      GeoPosition: {
        Latitude: 32.045,
        Longitude: 34.77,
        Elevation: {
          Metric: {
            Value: 34,
            Unit: "m",
            UnitType: 5,
          },
          Imperial: {
            Value: 111,
            Unit: "ft",
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyPollenForecast",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
      ],
    },
  ];
}

export function getCurrentCityWeather() {
  return [
    {
      LocalObservationDateTime: "2022-03-10T23:58:00+02:00",
      EpochTime: 1646949480,
      WeatherText: "Partly cloudy",
      WeatherIcon: 35,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: false,
      Temperature: {
        Metric: {
          Value: 14.4,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 58,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    },
  ];
}

export function getCurrentFiveDaysCityWeather() {
  return {
    Headline: {
      EffectiveDate: "2022-03-18T13:00:00+02:00",
      EffectiveEpochDate: 1647601200,
      Severity: 5,
      Text: "Expect showers Friday afternoon",
      Category: "rain",
      EndDate: "2022-03-18T19:00:00+02:00",
      EndEpochDate: 1647622800,
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    },
    DailyForecasts: [
      {
        Date: "2022-03-17T07:00:00+02:00",
        EpochDate: 1647493200,
        Temperature: {
          Minimum: {
            Value: 52,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 61,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 2,
          IconPhrase: "Mostly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 8,
          IconPhrase: "Dreary",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      },
      {
        Date: "2022-03-18T07:00:00+02:00",
        EpochDate: 1647579600,
        Temperature: {
          Minimum: {
            Value: 52,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 60,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Night: {
          Icon: 36,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      },
      {
        Date: "2022-03-19T07:00:00+02:00",
        EpochDate: 1647666000,
        Temperature: {
          Minimum: {
            Value: 51,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 63,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 38,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      },
      {
        Date: "2022-03-20T07:00:00+02:00",
        EpochDate: 1647752400,
        Temperature: {
          Minimum: {
            Value: 53,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 60,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 38,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      },
      {
        Date: "2022-03-21T07:00:00+02:00",
        EpochDate: 1647838800,
        Temperature: {
          Minimum: {
            Value: 47,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 61,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 34,
          IconPhrase: "Mostly clear",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      },
    ],
  };
}
