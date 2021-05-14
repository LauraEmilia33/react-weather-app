import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <span className="Column-1">
        <h4 className="hour-one">
          10:00
      </h4>

        <div className="forecastIcon">
          <WeatherIcon code="01d" />
        </div>


        <p className="forecastTemperature">
          <strong className="boldWeather">30º</strong>{" "}40º
        </p>
      </span>

      <span className="Column-2">
        <h4 className="hour-one">
          10:00
      </h4>
        <div className="forecastIcon">
          <WeatherIcon code="01d" />
        </div>
        <p className="forecastTemperature">
          <strong className="boldWeather">30º</strong>{" "}40º
        </p>
      </span>


      <span className="Column-3">
        <h4 className="hour-one">
          10:00
      </h4>
        <div className="forecastIcon">
          <WeatherIcon code="01d" />
        </div>
        <p className="forecastTemperature">
          <strong className="boldWeather">30º</strong>{" "}40º
        </p>
      </span>


    </div>
  )
}

