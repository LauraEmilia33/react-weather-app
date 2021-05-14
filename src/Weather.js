import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo"
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {

    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "95f162609dd8746fc4a9169098a143e3";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }


  if (weatherData.ready) {
    return (

      <div className="Weather">

        <div className="form-div">
          <form
            className="search-city"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Enter a City"
              className="search-input"
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              value="Search"
              className="search-button"
            />
          </form>
        </div>

        <div className="Icon">
          <WeatherInfo data={weatherData} />
        </div>

      </div>
    );
  } else {
    search();
    return "Loading..."
  }
}