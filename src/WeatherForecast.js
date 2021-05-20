import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

  function handleResponse(response) {
    console.log(response.data);
  }


  let apiKey = "95f162609dd8746fc4a9169098a143e3"
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <span className="Column-1">
        <h4 className="hour-one">
          10:00
        </h4>
        <div className="forecastIcon">
          <WeatherIcon code="01d" size={45} />
        </div>
        <p className="forecastTemperature">
          <strong className="boldWeather">30º</strong>{" "}40º
        </p>
      </span>

    </div>
  )
}

