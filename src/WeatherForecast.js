import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <span className="Column-1">
          <h4 className="forecast-day">
            {forecast[0].dt}
          </h4>
          <div className="forecastIcon">
            <WeatherIcon code={forecast[0].weather[0].icon} size={45} />
          </div>
          <p className="forecastTemperature">
            <strong className="boldWeather">{forecast[0].temp.max}º</strong>{" "}{forecast[0].temp.min}º
            </p>
        </span>
      </div>
    )
  } else {
    let apiKey = "95f162609dd8746fc4a9169098a143e3"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }

}

