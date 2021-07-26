import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecast">
      <span className="Column-1">
        <h4 className="forecast-day">
          {day()}
        </h4>
        <div className="forecastIcon">
          <WeatherIcon code={props.data.weather[0].icon} size={45} />
        </div>
        <p className="forecastTemperature">
          <strong className="boldWeather">{maxTemperature()}</strong>{" "}{minTemperature()}
        </p>
      </span>
    </div>
  );
}