import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {

    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }


  if (weatherData.ready) {
    return (

      <div className="Weather">

        <p className="Date">
          Last Updated: <FormattedDate date={weatherData.date} />
        </p>

        <p className="Humidity">
          Humidity: {weatherData.humidity} %
        </p>

        <p className="Wind">
          Wind: {Math.round(weatherData.wind)} km/h
        </p>

        <h2 className="City">
          {weatherData.city}
        </h2>

        <h3 className="Description">
          {weatherData.description}
        </h3>

        <p className="Degrees">
          {Math.round(weatherData.temperature)}
        </p>

        <p className="Units">
          ºC
        </p>

        <img
          className="Icon"
          src={weatherData.iconUrl}
          alt={weatherData.description}
        />

        <div className="form-div">
          <form className="search-city">
            <input
              type="search"
              placeholder="Enter a City"
              className="search-input"
              autoFocus="on"
              autoComplete="off"
            />
            <input
              type="submit"
              value="Search"
              className="search-button"
            />
          </form>
        </div>

        <button className="Fahrenheit">
          ºF
        </button>

        <button className="Celsius">
          ºC
        </button>

      </div>
    );
  } else {
    const apiKey = "95f162609dd8746fc4a9169098a143e3";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }
}